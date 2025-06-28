"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimalForecast = void 0;
const zod_1 = require("zod");
const helpers_1 = require("../helpers");
const getAnimalForecast = () => {
    const animalForecast = async ({ animals, }) => {
        const forecastData = await (0, helpers_1.makeFarmRequest)('/api/animal-forecast', {
            method: 'POST',
            body: JSON.stringify({ animals }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!forecastData || !forecastData.forecast) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Failed to retrieve forecast for ${animals[0].animalType}  in ${location}`,
                    },
                ],
            };
        }
        const results = forecastData.forecast.map((item) => {
            return `• ${item.type}: ${item.predictedCount} animals (estimated)`;
        });
        const resultText = `📈 Forecasted Animal Population:\n\n${results.join('\n')}`;
        return {
            content: [
                {
                    type: 'text',
                    text: resultText,
                },
            ],
        };
    };
    return {
        name: 'forecast-animal-population',
        description: 'Forecast future number of animals based on current population data using AI prediction',
        input: zod_1.z.object({
            animals: zod_1.z
                .array(zod_1.z.object({
                type: zod_1.z.string().describe('Animal type (e.g., goat, chicken)'),
                count: zod_1.z.number().describe('Number of animals'),
                gender: zod_1.z
                    .enum(['male', 'female', 'unknown'])
                    .describe('Gender of animals'),
                age: zod_1.z.number().describe('Average age of the animals in months'),
            }))
                .nonempty()
                .describe('List of animal groupings for forecasting'),
        }),
        fn: animalForecast,
    };
};
exports.getAnimalForecast = getAnimalForecast;
//# sourceMappingURL=get-animal-forcast.js.map