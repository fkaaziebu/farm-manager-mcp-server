import { Injectable } from '@nestjs/common';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ConfigService } from '@nestjs/config';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { tools } from './tools';

@Injectable()
export class AppService {
  private server: McpServer;
  private transport: StdioServerTransport | null = null;

  constructor(private configService: ConfigService) {
    // Initialize MCP server
    this.server = new McpServer({
      name: 'weather',
      version: '1.0.0',
    });
    // add server tools
    tools.map((tool) =>
      // @ts-expect-error error
      this.server.tool(tool.name, tool.description, tool.input, tool.fn),
    );
    this.runServer();
  }

  private async runServer() {
    try {
      this.transport = new StdioServerTransport();

      await this.server.connect(this.transport);

      console.error('Weather MCP Server running on stdio');
    } catch (e) {
      console.log('Failed to start MCP server: ', e);
      throw e;
    }
  }
}
