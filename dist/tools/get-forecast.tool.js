"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForecast = void 0;
const zod_1 = require("zod");
const helpers_1 = require("../helpers");
const NWS_API_BASE = 'https://api.weather.gov';
const getForecast = () => {
    const forecast = async ({ latitude, longitude, }) => {
        const pointsUrl = `${NWS_API_BASE}/points/${latitude.toFixed(4)},${longitude.toFixed(4)}`;
        const pointsData = await (0, helpers_1.makeNWSRequest)(pointsUrl);
        if (!pointsData) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Failed to retrieve grid point data for coordinates: ${latitude}, ${longitude}. This location may not be supported by the NWS API (only US locations are supported).`,
                    },
                ],
            };
        }
        const forecastUrl = pointsData.properties?.forecast;
        if (!forecastUrl) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'Failed to get forecast URL from grid point data',
                    },
                ],
            };
        }
        const forecastData = await (0, helpers_1.makeNWSRequest)(forecastUrl);
        if (!forecastData) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'Failed to retrieve forecast data',
                    },
                ],
            };
        }
        const periods = forecastData.properties?.periods || [];
        if (periods.length === 0) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'No forecast periods available',
                    },
                ],
            };
        }
        const formattedForecast = periods.map((period) => [
            `${period.name || 'Unknown'}:`,
            `Temperature: ${period.temperature || 'Unknown'}°${period.temperatureUnit || 'F'}`,
            `Wind: ${period.windSpeed || 'Unknown'} ${period.windDirection || ''}`,
            `${period.shortForecast || 'No forecast available'}`,
            '---',
        ].join('\n'));
        const forecastText = `Forecast for ${latitude}, ${longitude}:\n\n${formattedForecast.join('\n')}`;
        return {
            content: [
                {
                    type: 'text',
                    text: forecastText,
                },
            ],
        };
    };
    return {
        name: 'get-forecast',
        description: 'Get weather forecast for a location',
        input: {
            latitude: zod_1.z
                .number()
                .min(-90)
                .max(90)
                .describe('Latitude of the location'),
            longitude: zod_1.z
                .number()
                .min(-180)
                .max(180)
                .describe('Longitude of the location'),
        },
        fn: forecast,
    };
};
exports.getForecast = getForecast;
//# sourceMappingURL=get-forecast.tool.js.map