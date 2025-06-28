export declare const tools: ({
    name: string;
    description: string;
    input: {
        state: import("zod").ZodString;
    };
    fn: ({ state }: {
        state: string;
    }) => Promise<{
        content: {
            type: string;
            text: string;
        }[];
    }>;
} | {
    name: string;
    description: string;
    input: {
        latitude: import("zod").ZodNumber;
        longitude: import("zod").ZodNumber;
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
} | {
    name: string;
    description: string;
    input: import("zod").ZodObject<{
        farmTag: import("zod").ZodString;
        farmId: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
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
} | {
    name: string;
    description: string;
    input: import("zod").ZodObject<{
        animals: import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            count: import("zod").ZodNumber;
            gender: import("zod").ZodEnum<["male", "female", "unknown"]>;
            age: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
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
    }, "strip", import("zod").ZodTypeAny, {
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
} | {
    name: string;
    description: string;
    input: import("zod").ZodObject<{
        imageUrl: import("zod").ZodString;
        query: import("zod").ZodOptional<import("zod").ZodString>;
        language: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
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
})[];
