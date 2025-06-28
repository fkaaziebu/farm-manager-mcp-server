import { z } from 'zod';
export declare const classifyLeafDisease: () => {
    name: string;
    description: string;
    input: z.ZodObject<{
        imageUrl: z.ZodString;
        query: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        imageUrl?: string;
        query?: string;
        language?: string;
    }, {
        imageUrl?: string;
        query?: string;
        language?: string;
    }>;
    fn: ({ imageUrl, query, language, }: {
        imageUrl: string;
        query?: string;
        language?: string;
    }) => Promise<{
        content: ({
            type: string;
            text: any;
            image_url?: undefined;
        } | {
            type: string;
            image_url: {
                url: any;
                alt_text: any;
            };
            text?: undefined;
        })[];
    }>;
};
