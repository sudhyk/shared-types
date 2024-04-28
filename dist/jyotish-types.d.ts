import { Deg, Det } from './objects';
import { AHDateTime } from './util/datetimeutil';
export declare enum Graha {
    surya = "surya",
    chandra = "chandra",
    mangal = "mangal",
    budha = "budha",
    guru = "guru",
    shukra = "shukra",
    shani = "shani",
    rahu = "rahu",
    ketu = "ketu"
}
export declare const grahasMinusNodes: Graha[];
export declare const allGrahas: Graha[];
export declare enum Cusp {
    one = "one",
    two = "two",
    three = "three",
    four = "four",
    five = "five",
    six = "six",
    seven = "seven",
    eight = "eight",
    nine = "nine",
    ten = "ten",
    eleven = "eleven",
    twelve = "twelve"
}
export declare const allCusps: Cusp[];
export declare enum Ayanamsha {
    chitrapaksha = "chitrapaksha",
    pushyapaksha = "pushyapaksha",
    lahiri = "lahiri",
    bvraman = "bvraman",
    tropical = "tropical"
}
export declare enum CuspSystem {
    equal = "equal",
    placidus = "placidus",
    sripati = "sripati",
    porphyry = "porphyry"
}
export declare enum NodeType {
    meannode = "meannode",
    truenode = "truenode"
}
export declare enum RiseType {
    tropical = "tropical",
    vedic = "vedic"
}
export declare enum ChartDisplayStyle {
    northindian = "North",
    southindian = "South",
    eastindian = "East"
}
export declare class Config {
    ayanamsha: Ayanamsha;
    riseType: RiseType;
    nodeType: NodeType;
    cuspSystem: CuspSystem;
    chartDisplayStyle: ChartDisplayStyle;
    constructor(ayanamsha: Ayanamsha, riseType: RiseType, nodeType: NodeType, cuspSystem: CuspSystem, chartDisplayStyle: ChartDisplayStyle);
    static default(): Config;
}
export declare class Gps {
    readonly lat: number;
    readonly lon: number;
    readonly alt: number;
    readonly location: string;
    constructor({ lat, lon, alt, location }: {
        lat: number;
        lon: number;
        alt?: number;
        location: string;
    });
    toString(): string;
}
export declare class Input {
    dateTime: AHDateTime;
    gps: Gps;
    config: Config;
    gmtOffset: number;
    constructor(dateTime: AHDateTime, gps: Gps, config: Config, gmtOffset: number);
}
export interface Panchanga {
    sunrise: number;
    sunset: number;
    nextdaysunrise: number;
    moonrise: number;
    moonset: number;
    epochElements: FiveElements;
    sunriseElements: FiveElements;
    dinamaana: number;
    ratrimaana: number;
    masa: Masa;
    isAdhika: Boolean;
    samvat: Samvat;
    kaliyear: number;
    sakayear: number;
}
export interface FiveElements {
    vaara: Vaara;
    tithi: Tithi;
    nakshatraPada: NakshatraPada;
    yoga: Yoga;
    karana: Karana;
}
export interface NishekaDet {
    au_nisheka: number;
    aum_nisheka: number;
    surya_nisheka_long: number;
}
export interface Output {
    cusps: {
        [key: string]: Deg;
    };
    grahas: {
        [key: string]: Det;
    };
    input: Input;
    inputjd: number;
    panchanga: Panchanga;
    maandi: {
        [key: string]: MaandiDet;
    };
    nisheka: any[];
}
export interface TPEpochData {
    epoch: number;
    samvat: Samvat;
    kaliyear: number;
    sakayear: number;
    varshesha: Graha;
    maasesha: Graha;
    vaaresha: Graha;
    horesha: Graha;
}
export interface TPOutput {
    tpepochs: TPEpochData[];
    panchangAtBirth: Panchanga;
    input: Input;
}
export interface SROutput {
    srepochs: number[];
    losAtBirth: number;
    input: Input;
}
export interface AscInput {
    jd: number;
    lat: number;
    lon: number;
}
export interface MaandiDet {
    risejd: number;
    deg: Deg;
}
export declare enum Vaara {
    Ravi = "sunday",
    Soma = "monday",
    Mangal = "tuesday",
    Budha = "wednesday",
    Guru = "thursday",
    Shukra = "friday",
    Shani = "saturday"
}
export declare const allDaysOfWeek: Vaara[];
export declare const getWeekdayFromJulianDate: (juld: number, gmtOffset: number) => Vaara;
export declare const vaaresha: (vaara: Vaara) => Graha;
export declare const uk_maandi_rising_ghatikas: {
    [key: string]: [number, number];
};
export declare enum Tithi {
    S01 = 1,
    S02 = 2,
    S03 = 3,
    S04 = 4,
    S05 = 5,
    S06 = 6,
    S07 = 7,
    S08 = 8,
    S09 = 9,
    S10 = 10,
    S11 = 11,
    S12 = 12,
    S13 = 13,
    S14 = 14,
    S15 = 15,
    K01 = 16,
    K02 = 17,
    K03 = 18,
    K04 = 19,
    K05 = 20,
    K06 = 21,
    K07 = 22,
    K08 = 23,
    K09 = 24,
    K10 = 25,
    K11 = 26,
    K12 = 27,
    K13 = 28,
    K14 = 29,
    K15 = 30
}
export declare enum Samvat {
    Prabhava = "Prabhava",
    Vibhava = "Vibhava",
    Sukla = "Sukla",
    Pramodyuta = "Pramodyuta",
    Prajothpatti = "Prajothpatti",
    Aangeerasa = "Aangeerasa",
    Sreemukha = "Sreemukha",
    Bhāva = "Bh\u0101va",
    Yuva = "Yuva",
    Dhāta = "Dh\u0101ta",
    Īswara = "\u012Aswara",
    Bahudhānya = "Bahudh\u0101nya",
    Pramādhi = "Pram\u0101dhi",
    Vikrama = "Vikrama",
    Vrisha = "Vrisha",
    Chitrabhānu = "Chitrabh\u0101nu",
    Svabhānu = "Svabh\u0101nu",
    Tārana = "T\u0101rana",
    Pārthiva = "P\u0101rthiva",
    Vyaya = "Vyaya",
    Sarvajithu = "Sarvajithu",
    Sarvadhāri = "Sarvadh\u0101ri",
    Virodhi = "Virodhi",
    Vikruti = "Vikruti",
    Khara = "Khara",
    Nandana = "Nandana",
    Vijaya = "Vijaya",
    Jaya = "Jaya",
    Manmadha = "Manmadha",
    Durmukhi = "Durmukhi",
    Hevalambi = "Hevalambi",
    Vilambi = "Vilambi",
    Vikāri = "Vik\u0101ri",
    Sārvari = "S\u0101rvari",
    Plava = "Plava",
    Subhakritu = "Subhakritu",
    Sobhakritu = "Sobhakritu",
    Krodhi = "Krodhi",
    Viswāvasu = "Visw\u0101vasu",
    Parābhava = "Par\u0101bhava",
    Plavanga = "Plavanga",
    Kīlaka = "K\u012Blaka",
    Soumya = "Soumya",
    Sādhārana = "S\u0101dh\u0101rana",
    Virodhikritu = "Virodhikritu",
    Paridhāvi = "Paridh\u0101vi",
    Pramādeecha = "Pram\u0101deecha",
    Ānanda = "\u0100nanda",
    Rākshasa = "R\u0101kshasa",
    Nala = "Nala",
    Pingala = "Pingala",
    Kālayukti = "K\u0101layukti",
    Siddhārthi = "Siddh\u0101rthi",
    Roudri = "Roudri",
    Durmathi = "Durmathi",
    Dundubhi = "Dundubhi",
    Rudhirodgāri = "Rudhirodg\u0101ri",
    Raktākshi = "Rakt\u0101kshi",
    Krodhana = "Krodhana",
    Kshaya = "Kshaya"
}
export declare const allSamvat: Samvat[];
export declare enum Masa {
    Chaitra = "Chaitra",
    Vaisakha = "Vais\u0101kha",
    Jyeshta = "Jyeshta",
    Ashada = "\u0100sh\u0101da",
    Shraavana = "Shraavana",
    Bhaadra = "Bh\u0101dra",
    Ashwina = "Ashwina",
    Kartika = "Kartika",
    Margasirsa = "M\u0101rgasirsa",
    Pushya = "Pausha",
    Magha = "M\u0101gha",
    Phalguna = "Ph\u0101lguna"
}
export declare const allMasa: Masa[];
export declare enum Yoga {
    Vishakumbha = 1,
    Priti = 2,
    Ayushman = 3,
    Saubhagya = 4,
    Shobhana = 5,
    Atiganda = 6,
    Sukarma = 7,
    Dhriti = 8,
    Shula = 9,
    Ganda = 10,
    Vridhi = 11,
    Dhruva = 12,
    Vyaghata = 13,
    Harshana = 14,
    Vajra = 15,
    Siddi = 16,
    Vyatipata = 17,
    Variyan = 18,
    Prigha = 19,
    Shiva = 20,
    Siddha = 21,
    Sadhya = 22,
    Shubha = 23,
    Shukla = 24,
    Brahma = 25,
    Indra = 26,
    Vaidhriti = 27
}
export declare function findYoga(lom: number, los: number): Yoga;
export declare function initYoga(val: number): Yoga;
export declare enum Karana {
    Bava = "Bava",
    Balava = "Balava",
    Kaulava = "Kaulava",
    Taitila = "Taitila",
    Gara = "Gara",
    Vanij = "Vanij",
    Vishti = "Vishti",
    Shakuni = "Shakuni",
    Chatushpada = "Chatushpada",
    Naga = "Naga",
    Kintughna = "Kintughna"
}
export declare function findKarana(lom: number, los: number): Karana;
export declare function initKarana(absNumber: number): Karana;
export declare enum Pada {
    Pada1 = 1,
    Pada2 = 2,
    Pada3 = 3,
    Pada4 = 4
}
export declare enum Nakshatra {
    Ashwini = 1,
    Bharani = 2,
    Krittika = 3,
    Rohini = 4,
    Mrigashira = 5,
    Ardra = 6,
    Punarvasu = 7,
    Pushya = 8,
    Ashlesha = 9,
    Magha = 10,
    PurvaPhalguni = 11,
    UttaraPhalguni = 12,
    Hasta = 13,
    Chitra = 14,
    Swati = 15,
    Vishaka = 16,
    Anuradha = 17,
    Jyesta = 18,
    Moola = 19,
    Purvashada = 20,
    Uttarashada = 21,
    Shravana = 22,
    Dhanista = 23,
    Shatabhisha = 24,
    Purvabhadra = 25,
    Uttarabhadra = 26,
    Revati = 27
}
export interface NakshatraPada {
    nakshatra: Nakshatra;
    pada: Pada;
}
export declare function calculateNakshatraAndPada(degree: number): NakshatraPada;
export interface Hora {
    index: number;
    startjd: number;
    endjd: number;
    lord: Graha;
}
export declare const speedOrder: Graha[];
export declare function nextInSpeedOrder(graha: Graha): Graha;
export declare enum HoraDivType {
    Equal = "Equal",
    Unequal = "Unequal"
}
export declare class HoraManager {
    sunrise: number;
    sunset: number;
    sunriseNextDay: number;
    vaara: Vaara;
    equalHoraSequence: Hora[];
    speedOrderGrahaSequence: Graha[];
    constructor(sunrise: number, sunset: number, sunriseNextDay: number, vaara: Vaara);
    horaLord(time: number, type: HoraDivType): Graha;
}
