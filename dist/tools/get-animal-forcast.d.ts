import { z } from 'zod';
export declare const getAnimalForecast: () => {
    name: string;
    description: string;
    input: z.ZodObject<{
        animals: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            count: z.ZodNumber;
            gender: z.ZodEnum<["male", "female", "unknown"]>;
            age: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type?: string;
            count?: number;
            gender?: "unknown" | "male" | "female";
            age?: number;
        }, {
            type?: string;
            count?: number;
            gender?: "unknown" | "male" | "female";
            age?: number;
        }>, "atleastone">;
    }, "strip", z.ZodTypeAny, {
        animals?: [{
            type?: string;
            count?: number;
            gender?: "unknown" | "male" | "female";
            age?: number;
        }, ...{
            type?: string;
            count?: number;
            gender?: "unknown" | "male" | "female";
            age?: number;
        }[]];
    }, {
        animals?: [{
            type?: string;
            count?: number;
            gender?: "unknown" | "male" | "female";
            age?: number;
        }, ...{
            type?: string;
            count?: number;
            gender?: "unknown" | "male" | "female";
            age?: number;
        }[]];
    }>;
    fn: ({ animals, }: {
        animals: {
            animalType: string;
            location: string;
            gender: string;
            age: number;
            breed: string;
        }[];
    }) => Promise<{
        content: {
            type: string;
            text: string;
        }[];
    }>;
};
