import { z } from 'zod';
export declare const getFarmSummary: () => {
    name: string;
    description: string;
    input: z.ZodObject<{
        farmTag: z.ZodString;
        farmId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        farmTag?: string;
        farmId?: string;
    }, {
        farmTag?: string;
        farmId?: string;
    }>;
    fn: ({ farmId, farmTag, }: {
        farmId: string;
        farmTag: string;
    }) => Promise<{
        content: {
            type: string;
            text: string;
        }[];
    }>;
};
