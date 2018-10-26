export declare const verify: (rut: string | number) => Promise<boolean>;
export declare const format: (rut: string | number) => string;
export declare const getDigit: (incompleteRut: string | number) => Promise<string>;
