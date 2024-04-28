export declare class AHDateTime {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
    constructor(year: number, month: number, day: number, hours: number, minutes: number, seconds: number);
}
export declare function decimalHours(dateTime: AHDateTime): number;
export declare function utcDateTime(dateTime: AHDateTime, gmtOffset: number): AHDateTime;
export declare function toUnixTimestamp(dateTime: AHDateTime): number;
export declare function calculateUTC(year: number, month: number, day: number, hours: number, minutes: number, seconds: number, timezoneDiffFromUTC: number): AHDateTime;
export declare function toJulianDate(year: number, month: number, day: number, hours: number, minutes: number, seconds: number): number;
export declare function fromJulianDate(julianDate: number): AHDateTime;
export declare function displayableString(juld: number, gmtOffset: number): string;
