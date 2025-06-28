import { AlertFeature } from '../types';
export declare function makeNWSRequest<T>(url: string): Promise<T | null>;
export declare function formatAlert(feature: AlertFeature): string;
export declare const makeFarmRequest: <T>(url: string, options?: RequestInit) => Promise<T | null>;
