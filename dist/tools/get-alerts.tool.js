"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlerts = void 0;
const zod_1 = require("zod");
const helpers_1 = require("../helpers");
const NWS_API_BASE = 'https://api.weather.gov';
const getAlerts = () => {
    const getAlert = async ({ state }) => {
        const stateCode = state.toUpperCase();
        const alertsUrl = `${NWS_API_BASE}/alerts?area=${stateCode}`;
        const alertsData = await (0, helpers_1.makeNWSRequest)(alertsUrl);
        if (!alertsData) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'Failed to retrieve alerts data',
                    },
                ],
            };
        }
        const features = alertsData.features || [];
        if (features.length === 0) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `No active alerts for ${stateCode}`,
                    },
                ],
            };
        }
        const formattedAlerts = features.map(helpers_1.formatAlert);
        const alertsText = `Active alerts for ${stateCode}:\n\n${formattedAlerts.join('\n')}`;
        return {
            content: [
                {
                    type: 'text',
                    text: alertsText,
                },
            ],
        };
    };
    return {
        name: 'get-alerts',
        description: 'Get weather alerts for a state',
        input: {
            state: zod_1.z
                .string()
                .length(2)
                .describe('Two-letter state code (e.g. CA, NY)'),
        },
        fn: getAlert,
    };
};
exports.getAlerts = getAlerts;
//# sourceMappingURL=get-alerts.tool.js.map