import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { Controller, HttpCode, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { tools } from './tools';

@Controller('')
export class AppController {
  private server: McpServer;
  private transport: StreamableHTTPServerTransport | null = null;

  constructor() {
    // Initialize MCP server
    this.server = new McpServer({
      name: 'farm-manager',
      version: '1.0.0',
    });
    // add server tools
    tools.map((tool) =>
      // @ts-expect-error error
      this.server.tool(tool.name, tool.description, tool.input, tool.fn),
    );
  }

  @Post('/mcp')
  @HttpCode(200)
  async mcp(@Req() req: Request, @Res() res: Response) {
    try {
      const needsStreaming = this.shouldStream(req);

      this.transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });

      await this.server.connect(this.transport);

      if (needsStreaming) {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();
      }

      // Let the transport handle the request fully
      this.transport.handleRequest(req, res, req.body);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private shouldStream(req: Request): boolean {
    // Example logic — adapt to your protocol!
    return req.headers.accept === 'text/event-stream';
  }
}
