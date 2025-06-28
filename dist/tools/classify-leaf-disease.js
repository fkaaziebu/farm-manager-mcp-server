"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyLeafDisease = void 0;
const zod_1 = require("zod");
const helpers_1 = require("../helpers");
const CNN_API = 'https://yourserver.com/api';
const classifyLeafDisease = () => {
    const classifyLeaf = async ({ imageUrl, query, language, }) => {
        const requestPayload = {
            imageUrl,
            query: query || 'Does this leaf have a disease?',
            language: language || 'en',
        };
        const response = await (0, helpers_1.makeFarmRequest)(`${CNN_API}/classify/leaf`, {
            method: 'POST',
            body: JSON.stringify(requestPayload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response || !response.answer) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'Could not classify the leaf or interpret the question.',
                    },
                ],
            };
        }
        return {
            content: [
                {
                    type: 'text',
                    text: response.answer,
                },
                ...(response.diseaseImageUrl
                    ? [
                        {
                            type: 'image',
                            image_url: {
                                url: response.diseaseImageUrl,
                                alt_text: response.disease || 'Disease Image',
                            },
                        },
                    ]
                    : []),
            ],
        };
    };
    return {
        name: 'classify-leaf-disease',
        description: 'Classifies plant leaf diseases from a photo and answers questions in multiple languages.',
        input: zod_1.z.object({
            imageUrl: zod_1.z
                .string()
                .url()
                .describe('Publicly accessible URL of the leaf image'),
            query: zod_1.z.string().optional().describe('Optional natural language query'),
            language: zod_1.z
                .string()
                .optional()
                .describe('Optional language code (e.g., en, ak, tw, ga)'),
        }),
        fn: classifyLeaf,
    };
};
exports.classifyLeafDisease = classifyLeafDisease;
//# sourceMappingURL=classify-leaf-disease.js.map