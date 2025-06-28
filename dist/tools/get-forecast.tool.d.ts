import { z } from 'zod';
export declare const getForecast: () => {
    name: string;
    description: string;
    input: {
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    };
    fn: ({ latitude, longitude, }: {
        latitude: number;
        longitude: number;
    }) => Promise<{
        content: {
            type: string;
            text: string;
        }[];
    }>;
};
