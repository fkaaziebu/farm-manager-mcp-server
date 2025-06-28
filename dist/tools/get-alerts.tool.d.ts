import { z } from 'zod';
export declare const getAlerts: () => {
    name: string;
    description: string;
    input: {
        state: z.ZodString;
    };
    fn: ({ state }: {
        state: string;
    }) => Promise<{
        content: {
            type: string;
            text: string;
        }[];
    }>;
};
