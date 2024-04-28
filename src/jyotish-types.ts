import { Deg, Det } from './objects';
import { AHDateTime, fromJulianDate } from './util/datetimeutil';

export enum Graha {
    surya = 'surya',
    chandra = 'chandra',
    mangal = 'mangal',
    budha = 'budha',
    guru = 'guru',
    shukra = 'shukra',
    shani = 'shani',
    rahu = 'rahu',
    ketu = 'ketu'
}
export const grahasMinusNodes = [Graha.surya, Graha.chandra, Graha.mangal, Graha.budha, Graha.guru, Graha.shukra, Graha.shani];
export const allGrahas = [Graha.surya, Graha.chandra, Graha.mangal, Graha.budha, Graha.guru, Graha.shukra, Graha.shani, Graha.rahu, Graha.ketu];

export enum Cusp {
    one = 'one',
    two = 'two',
    three = 'three',
    four = 'four',
    five = 'five',
    six = 'six',
    seven = 'seven',
    eight = 'eight',
    nine = 'nine',
    ten = 'ten',
    eleven = 'eleven',
    twelve = 'twelve'
}

export const allCusps = [Cusp.one, Cusp.two, Cusp.three, Cusp.four, Cusp.five, Cusp.six, Cusp.seven, Cusp.eight, Cusp.nine, Cusp.ten, Cusp.eleven, Cusp.twelve];

export enum Ayanamsha {
    chitrapaksha = 'chitrapaksha',
    pushyapaksha = 'pushyapaksha',
    lahiri = 'lahiri',
    bvraman = 'bvraman',
    tropical = 'tropical'
}

export enum CuspSystem {
    equal = 'equal',
    placidus = 'placidus',
    sripati = 'sripati',
    porphyry = 'porphyry'
}

export enum NodeType {
    meannode = 'meannode',
    truenode = 'truenode'
}

export enum RiseType {
    tropical = 'tropical',
    vedic = 'vedic'
}

export enum ChartDisplayStyle {
  northindian = "North",
  southindian = "South",
  eastindian = "East"
}

export class Config {
    ayanamsha: Ayanamsha;
    riseType: RiseType;
    nodeType: NodeType;
    cuspSystem: CuspSystem;
    chartDisplayStyle: ChartDisplayStyle;

    constructor(
      ayanamsha: Ayanamsha,
      riseType: RiseType,
      nodeType: NodeType,
      cuspSystem: CuspSystem,
      chartDisplayStyle: ChartDisplayStyle
    ) {
      this.ayanamsha = ayanamsha;
      this.riseType = riseType;
      this.nodeType = nodeType;
      this.cuspSystem = cuspSystem;
      this.chartDisplayStyle = chartDisplayStyle
    }
  
    static default(): Config {
      return new Config(
        Ayanamsha.chitrapaksha,
        RiseType.tropical,
        NodeType.meannode,
        CuspSystem.equal,
        ChartDisplayStyle.southindian
      );
    }
  }

  export class Gps {
    readonly lat: number;
    readonly lon: number;
    readonly alt: number;
    readonly location: string;
  
    constructor({ lat, lon, alt = 0, location }: { lat: number; lon: number; alt?: number; location: string }) {
      this.lat = lat;
      this.lon = lon;
      this.alt = alt || 0;
      this.location = location;
    }
  
    toString(): string {
        return `Gps(lat: ${this.lat}, lon: ${this.lon}, alt: ${this.alt}, location: ${this.location})`;
    }
}

export class Input {
    dateTime: AHDateTime;
    gps: Gps;
    config: Config;
    gmtOffset: number;

    constructor(dateTime: AHDateTime, gps: Gps, config: Config, gmtOffset: number) {
        this.dateTime = dateTime;
        this.gps = gps;
        this.config = config;
        this.gmtOffset = gmtOffset;
    }
}
export interface Panchanga {
  sunrise: number
  sunset: number
  nextdaysunrise: number
  moonrise: number,
  moonset: number,
  epochElements: FiveElements
  sunriseElements: FiveElements
  dinamaana: number
  ratrimaana: number
  masa: Masa
  isAdhika: Boolean
  samvat: Samvat
  kaliyear: number
  sakayear: number
}

export interface FiveElements {
  vaara: Vaara
  tithi: Tithi
  nakshatraPada: NakshatraPada
  yoga: Yoga
  karana: Karana
}

export interface NishekaDet {
  au_nisheka: number
  aum_nisheka: number
  surya_nisheka_long: number
}

export interface Output {
  cusps: { [key: string]: Deg };
  grahas: { [key: string]: Det };
  input: Input;
  inputjd: number;
  panchanga: Panchanga
  maandi: { [key: string]: MaandiDet}
  nisheka: any[]
}

export interface TPEpochData {
  epoch: number
  samvat: Samvat
  kaliyear: number
  sakayear: number
  varshesha: Graha
  maasesha: Graha
  vaaresha: Graha
  horesha: Graha
}

export interface TPOutput {
  tpepochs: TPEpochData[],
  panchangAtBirth: Panchanga,
  input: Input
}

export interface SROutput {
  srepochs: number[],
  losAtBirth: number,
  input: Input
}

export interface AscInput {
  jd: number;
  lat: number;
  lon: number;
}


export interface MaandiDet {
  risejd: number,
  deg: Deg
}

export enum Vaara {
  Ravi = "sunday",
  Soma = "monday",
  Mangal = "tuesday",
  Budha = "wednesday",
  Guru = "thursday",
  Shukra = "friday",
  Shani = "saturday"
}

export const allDaysOfWeek = [Vaara.Ravi, Vaara.Soma, Vaara.Mangal, Vaara.Budha, Vaara.Guru, Vaara.Shukra, Vaara.Shani];
export const getWeekdayFromJulianDate = (juld: number, gmtOffset: number) => {
  const dateTime = fromJulianDate(juld + gmtOffset / 24);
  const date = new Date(dateTime.year, dateTime.month-1, dateTime.day, dateTime.hours, dateTime.minutes, dateTime.seconds);
  return allDaysOfWeek[date.getDay()]
};

export const vaaresha = (vaara: Vaara): Graha => {
  switch (vaara) {
    case Vaara.Ravi: return Graha.surya;
    case Vaara.Soma: return Graha.chandra;
    case Vaara.Mangal: return Graha.mangal;
    case Vaara.Budha: return Graha.budha;
    case Vaara.Guru: return Graha.guru;
    case Vaara.Shukra: return Graha.shukra;
    case Vaara.Shani: return Graha.shani;
    default: 
    throw new Error("This should not happen")
  }
}

export const uk_maandi_rising_ghatikas: { [key: string]: [number, number] } = {};
uk_maandi_rising_ghatikas[Vaara.Ravi] = [26, 10];
uk_maandi_rising_ghatikas[Vaara.Soma] = [22, 6];
uk_maandi_rising_ghatikas[Vaara.Mangal] = [18, 2];
uk_maandi_rising_ghatikas[Vaara.Budha] = [14, 26];
uk_maandi_rising_ghatikas[Vaara.Guru] = [10, 22];
uk_maandi_rising_ghatikas[Vaara.Shukra] = [6, 18];
uk_maandi_rising_ghatikas[Vaara.Shani] = [2, 14];


export enum Tithi {
  S01 = 1,
  S02,
  S03,
  S04,
  S05,
  S06,
  S07,
  S08,
  S09,
  S10,
  S11,
  S12,
  S13,
  S14,
  S15,
  K01,
  K02,
  K03,
  K04,
  K05,
  K06,
  K07,
  K08,
  K09,
  K10,
  K11,
  K12,
  K13,
  K14,
  K15
}

export enum Samvat {
  Prabhava = "Prabhava",
  Vibhava = "Vibhava",
  Sukla = "Sukla",
  Pramodyuta = "Pramodyuta",
  Prajothpatti = "Prajothpatti",
  Aangeerasa = "Aangeerasa",
  Sreemukha = "Sreemukha",
  Bhāva = "Bhāva",
  Yuva = "Yuva",
  Dhāta = "Dhāta",
  Īswara = "Īswara",
  Bahudhānya = "Bahudhānya",
  Pramādhi = "Pramādhi",
  Vikrama = "Vikrama",
  Vrisha = "Vrisha",
  Chitrabhānu = "Chitrabhānu",
  Svabhānu = "Svabhānu",
  Tārana = "Tārana",
  Pārthiva = "Pārthiva",
  Vyaya = "Vyaya",
  Sarvajithu = "Sarvajithu",
  Sarvadhāri = "Sarvadhāri",
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
  Vikāri = "Vikāri",
  Sārvari = "Sārvari",
  Plava = "Plava",
  Subhakritu = "Subhakritu",
  Sobhakritu = "Sobhakritu",
  Krodhi = "Krodhi",
  Viswāvasu = "Viswāvasu",
  Parābhava = "Parābhava",
  Plavanga = "Plavanga",
  Kīlaka = "Kīlaka",
  Soumya = "Soumya",
  Sādhārana = "Sādhārana",
  Virodhikritu = "Virodhikritu",
  Paridhāvi = "Paridhāvi",
  Pramādeecha = "Pramādeecha",
  Ānanda = "Ānanda",
  Rākshasa = "Rākshasa",
  Nala = "Nala",
  Pingala = "Pingala",
  Kālayukti = "Kālayukti",
  Siddhārthi = "Siddhārthi",
  Roudri = "Roudri",
  Durmathi = "Durmathi",
  Dundubhi = "Dundubhi",
  Rudhirodgāri = "Rudhirodgāri",
  Raktākshi = "Raktākshi",
  Krodhana = "Krodhana",
  Kshaya = "Kshaya"
}

export const allSamvat: Samvat[] = [
  Samvat.Prabhava,
  Samvat.Vibhava,
  Samvat.Sukla,
  Samvat.Pramodyuta,
  Samvat.Prajothpatti,
  Samvat.Aangeerasa,
  Samvat.Sreemukha,
  Samvat.Bhāva,
  Samvat.Yuva,
  Samvat.Dhāta,
  Samvat.Īswara,
  Samvat.Bahudhānya,
  Samvat.Pramādhi,
  Samvat.Vikrama,
  Samvat.Vrisha,
  Samvat.Chitrabhānu,
  Samvat.Svabhānu,
  Samvat.Tārana,
  Samvat.Pārthiva,
  Samvat.Vyaya,
  Samvat.Sarvajithu,
  Samvat.Sarvadhāri,
  Samvat.Virodhi,
  Samvat.Vikruti,
  Samvat.Khara,
  Samvat.Nandana,
  Samvat.Vijaya,
  Samvat.Jaya,
  Samvat.Manmadha,
  Samvat.Durmukhi,
  Samvat.Hevalambi,
  Samvat.Vilambi,
  Samvat.Vikāri,
  Samvat.Sārvari,
  Samvat.Plava,
  Samvat.Subhakritu,
  Samvat.Sobhakritu,
  Samvat.Krodhi,
  Samvat.Viswāvasu,
  Samvat.Parābhava,
  Samvat.Plavanga,
  Samvat.Kīlaka,
  Samvat.Soumya,
  Samvat.Sādhārana,
  Samvat.Virodhikritu,
  Samvat.Paridhāvi,
  Samvat.Pramādeecha,
  Samvat.Ānanda,
  Samvat.Rākshasa,
  Samvat.Nala,
  Samvat.Pingala,
  Samvat.Kālayukti,
  Samvat.Siddhārthi,
  Samvat.Roudri,
  Samvat.Durmathi,
  Samvat.Dundubhi,
  Samvat.Rudhirodgāri,
  Samvat.Raktākshi,
  Samvat.Krodhana,
  Samvat.Kshaya
];

export enum Masa {
  Chaitra = "Chaitra",
  Vaisakha = "Vaisākha",
  Jyeshta = "Jyeshta",
  Ashada = "Āshāda",
  Shraavana = "Shraavana",
  Bhaadra = "Bhādra",
  Ashwina = "Ashwina",
  Kartika = "Kartika",
  Margasirsa = "Mārgasirsa",
  Pushya = "Pausha",
  Magha = "Māgha",
  Phalguna = "Phālguna"
}

export const allMasa = [Masa.Chaitra, Masa.Vaisakha, Masa.Jyeshta, Masa.Ashada, Masa.Shraavana, Masa.Bhaadra, Masa.Ashwina, Masa.Kartika, Masa.Margasirsa, Masa.Pushya, Masa.Magha, Masa.Phalguna];

export enum Yoga {
  Vishakumbha = 1,
  Priti,
  Ayushman,
  Saubhagya,
  Shobhana,
  Atiganda,
  Sukarma,
  Dhriti,
  Shula,
  Ganda,
  Vridhi,
  Dhruva,
  Vyaghata,
  Harshana,
  Vajra,
  Siddi,
  Vyatipata,
  Variyan,
  Prigha,
  Shiva,
  Siddha,
  Sadhya,
  Shubha,
  Shukla,
  Brahma,
  Indra,
  Vaidhriti
}

export function findYoga(lom: number, los: number): Yoga {
  const yogafraction = (lom + los) / (13 + (20.0/60.0))
  let totalYogasPassed = Math.floor(yogafraction);
  totalYogasPassed = totalYogasPassed % 27.0
  return initYoga(totalYogasPassed + 1);
}

export function initYoga(val: number): Yoga {
  if (val < 1) {
      return Yoga[27 + val] as any as Yoga;
  } else if (val > 27) {
      return Yoga[val - 27] as any as Yoga;
  } else {
      return Yoga[val] as any as Yoga;
  }
}

export enum Karana {
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

export function findKarana(lom: number, los: number): Karana {
  let karana = (lom - los) + 360.0;
  karana = karana % 360.0
  karana = karana/6;
  const karanasPassed = Math.floor(karana);
  return initKarana(karanasPassed + 1);
}


export function initKarana(absNumber: number): Karana {
  let resolved: number;
  if (absNumber < 1) {
      resolved = 60 + absNumber;
  } else if (absNumber > 60) {
      resolved = absNumber - 60;
  } else {
      resolved = absNumber;
  }

  switch (resolved) {
      case 1: return Karana.Kintughna;
      case 58: return Karana.Shakuni;
      case 59: return Karana.Chatushpada;
      case 60: return Karana.Naga;
      case 2: case 9: case 16: case 23: case 30: case 37: case 44: case 51: return Karana.Bava;
      case 3: case 10: case 17: case 24: case 31: case 38: case 45: case 52: return Karana.Balava;
      case 4: case 11: case 18: case 25: case 32: case 39: case 46: case 53: return Karana.Kaulava;
      case 5: case 12: case 19: case 26: case 33: case 40: case 47: case 54: return Karana.Taitila;
      case 6: case 13: case 20: case 27: case 34: case 41: case 48: case 55: return Karana.Gara;
      case 7: case 14: case 21: case 28: case 35: case 42: case 49: case 56: return Karana.Vanij;
      case 8: case 15: case 22: case 29: case 36: case 43: case 50: case 57: return Karana.Vishti;
      default: 
      console.log(resolved);
      throw new Error("Invalid Karana number");
  }
}

// Assuming Pada enum is defined elsewhere
export enum Pada {
  Pada1 = 1,
  Pada2,
  Pada3,
  Pada4,
}

export enum Nakshatra {
  Ashwini = 1,
  Bharani,
  Krittika,
  Rohini,
  Mrigashira,
  Ardra,
  Punarvasu,
  Pushya,
  Ashlesha,
  Magha,
  PurvaPhalguni,
  UttaraPhalguni,
  Hasta,
  Chitra,
  Swati,
  Vishaka,
  Anuradha,
  Jyesta,
  Moola,
  Purvashada,
  Uttarashada,
  Shravana,
  Dhanista,
  Shatabhisha,
  Purvabhadra,
  Uttarabhadra,
  Revati
}

export interface NakshatraPada {
  nakshatra: Nakshatra;
  pada: Pada; // 1, 2, 3, or 4
}

export function calculateNakshatraAndPada(degree: number): NakshatraPada {
  const nakshatraSpan: number = 360.0 / 27.0;
  const partSpan: number = 360.0 / (27.0 * 4.0);
  
  // Find the Nakshatra
  let nakshatraIndex: number = Math.floor(degree / nakshatraSpan);
  if (nakshatraIndex === 27) {
      nakshatraIndex = 0; // Wrap around for Revati
  }
  const nakshatra: Nakshatra = nakshatraIndex + 1;

  // Find the part within the Nakshatra
  const part: number = Math.floor((degree % nakshatraSpan) / partSpan) + 1;


  return { nakshatra, pada:  part as Pada };
}

export interface Hora {
  index: number;
  startjd: number;
  endjd: number;
  lord: Graha;
}

export const speedOrder: Graha[] = [Graha.shani, Graha.guru, Graha.mangal, Graha.surya, Graha.shukra, Graha.budha, Graha.chandra];

export function nextInSpeedOrder(graha: Graha): Graha {
  let currIndex = speedOrder.indexOf(graha);
  currIndex += 1;
  if (currIndex == 7) {
    currIndex = 0;
  }
  return speedOrder[currIndex];
}


export enum HoraDivType {
  Equal = "Equal",
  Unequal = "Unequal"
}

export class HoraManager {
  sunrise: number;
  sunset: number;
  sunriseNextDay: number;
  vaara: Vaara;
  equalHoraSequence: Hora[];
  // unequalHoraSequence: Hora[];
  speedOrderGrahaSequence: Graha[];

  constructor(sunrise: number, sunset: number, sunriseNextDay: number, vaara: Vaara) {
      this.sunrise = sunrise;
      this.sunset = sunset;
      this.sunriseNextDay = sunriseNextDay;
      this.vaara = vaara;
      
      
      let grahaSequenceInTheDay: Graha[] = [vaaresha(vaara)]
      for (let i = 1; i < 24; i++) {
        grahaSequenceInTheDay.push(nextInSpeedOrder(grahaSequenceInTheDay[grahaSequenceInTheDay.length-1]));
      }

      this.speedOrderGrahaSequence = grahaSequenceInTheDay;

      const diff = sunriseNextDay - sunrise
      let onePart = diff / 24.0
      let arr: Hora[] = []
      grahaSequenceInTheDay.forEach((graha, index) => {
        const lower = sunrise + (index * onePart)
        const higher = lower + onePart
        arr.push({
          index: index + 1,
          startjd: lower,
          endjd: higher,
          lord: graha
        });
      });
      this.equalHoraSequence = arr
  }

  horaLord(time: number, type: HoraDivType): Graha  {
      if (!(this.sunrise <= time && time < this.sunriseNextDay)) {
          throw new Error("Hora Time out of bounds")
      }
      // const horaSequence = type == HoraDivType.Equal ? this.equalHoraSequence : this.unequalHoraSequence;
      const horaSequence = this.equalHoraSequence
      for (let index = 0; index < horaSequence.length; index++) {
          const val = horaSequence[index];
          if (val.startjd <= time && time < val.endjd) {
              return this.speedOrderGrahaSequence[index];
          }
      }
      throw new Error("Hora Time out of bounds")
    }
}