export declare class Deg {
    value: number;
    degrees: number;
    minutes: number;
    seconds: number;
    constructor(value: number);
    toString(): string;
}
export declare function stringValue(deg: Deg): string;
export declare function sdmsString(deg: Deg): string;
export declare class Det {
    readonly lat: Deg;
    readonly lon: Deg;
    readonly speed: number;
    constructor(lat: Deg, lon: Deg, speed: number);
    toString(): string;
}
