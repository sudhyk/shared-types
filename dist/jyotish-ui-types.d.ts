import { Graha, Nakshatra, Pada } from "./jyotish-types";
import { Deg } from "./objects";
export declare enum Rashi {
    Mesha = 1,
    Vrishabha = 2,
    Mithuna = 3,
    Karka = 4,
    Simha = 5,
    Kanya = 6,
    Tula = 7,
    Vrischika = 8,
    Dhanus = 9,
    Makara = 10,
    Kumbha = 11,
    Meena = 12
}
export declare const allRashis: Rashi[];
export declare function getRashiRange(rashi: Rashi): [number, number];
export declare function getRashiStringValue(rashi: Rashi): string;
export declare function getRashiLords(rashi: Rashi): Graha[];
export declare function getBhava(rashi: Rashi, lagnaRashi: Rashi): number;
export declare function getNthRashi(rashi: Rashi, n: number): Rashi;
export declare function getRashiForDeg(deg: number): Rashi | undefined;
export declare function getNakshatraStringValue(naks: Nakshatra): string;
export declare const vimsottariGrahaSeq: Graha[];
export declare function getVimsottariLord(nakshatra: Nakshatra): Graha;
export declare function getPadaStringValue(pada: Pada): string;
export declare function signDegString(deg: Deg): string;
export declare function signDeg(deg: Deg): Deg;
