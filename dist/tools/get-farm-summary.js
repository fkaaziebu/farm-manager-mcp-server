"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFarmSummary = void 0;
const zod_1 = require("zod");
const helpers_1 = require("../helpers");
const MCP_API_BASE = 'https://api.base.com';
const getFarmSummary = () => {
    const farmSummary = async ({ farmId, farmTag, }) => {
        const summaryUrl = `${MCP_API_BASE}/farms/${farmId}/summary`;
        const summaryData = await (0, helpers_1.makeNWSRequest)(summaryUrl);
        if (!summaryData) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Failed to retrieve summary for farm ID: ${farmId}`,
                    },
                ],
            };
        }
        return {
            content: [
                {
                    type: 'text',
                    text: `Farm Summary for ID ${farmId}:\n\n${JSON.stringify(summaryData, null, 2)}`,
                },
            ],
        };
    };
    return {
        name: 'get-farm-summary',
        description: 'Get summary information for a specific farm by ID',
        input: zod_1.z.object({
            farmTag: zod_1.z.string().describe('The farm tag identifier'),
            farmId: zod_1.z.string().describe('The farm ID'),
        }),
        fn: farmSummary,
    };
};
exports.getFarmSummary = getFarmSummary;
//# sourceMappingURL=get-farm-summary.js.map