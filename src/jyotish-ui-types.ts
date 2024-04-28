import { Graha, Nakshatra, Pada } from "./jyotish-types";
import { Deg, stringValue } from "./objects";

export enum Rashi {
    Mesha = 1,
    Vrishabha,
    Mithuna,
    Karka,
    Simha,
    Kanya,
    Tula,
    Vrischika,
    Dhanus,
    Makara,
    Kumbha,
    Meena,
  }
 
  export const allRashis: Rashi[] = [
    Rashi.Mesha,
    Rashi.Vrishabha,
    Rashi.Mithuna,
    Rashi.Karka,
    Rashi.Simha,
    Rashi.Kanya,
    Rashi.Tula,
    Rashi.Vrischika,
    Rashi.Dhanus,
    Rashi.Makara,
    Rashi.Kumbha,
    Rashi.Meena,
];

  export function getRashiRange(rashi: Rashi): [number, number] {
    const start = (rashi - 1) * (360.0 / 12.0);
    const end = rashi * (360.0 / 12.0);
    return [start, end];
  }

  export function getRashiStringValue(rashi: Rashi): string {
    return Rashi[rashi]; // This will return the string representation of the enum value
  }
  
  export function getRashiLords(rashi: Rashi): Graha[] {
    switch (rashi) {
      
      case Rashi.Mesha:
        return [Graha.mangal];

      case Rashi.Vrischika:
        return [Graha.mangal , Graha.ketu];

      case Rashi.Vrishabha:
        return [Graha.shukra , Graha.chandra];

      case Rashi.Tula:
        return [Graha.shukra];
      case Rashi.Mithuna:
      case Rashi.Kanya:
        return [Graha.budha];
      case Rashi.Karka:
        return [Graha.chandra];
      case Rashi.Simha:
        return [Graha.surya];
      case Rashi.Dhanus:
      case Rashi.Meena:
        return [Graha.guru];
      case Rashi.Makara:
        return [Graha.shani];
      case Rashi.Kumbha:
        return [Graha.shani, Graha.rahu];
    }
  }
  
  export function getBhava(rashi: Rashi, lagnaRashi: Rashi): number {
    return ((rashi + 12 - lagnaRashi) % 12 + 1);
  }
  
  export function getNthRashi(rashi: Rashi, n: number): Rashi {
    let raw = rashi + (n - 1);
    raw = raw % 12;
    if (raw === 0) {
      raw = 12;
    }
    return raw;
  }
  
  export function getRashiForDeg(deg: number): Rashi | undefined {
    const rashiValues = allRashis.filter(value => typeof value === 'number') as Rashi[];
    for (const ras of rashiValues) {
      const [start, end] = getRashiRange(ras);
      if (deg >= start && deg <= end) {
        return ras;
      }
    }
    return undefined;
  }

// export enum Nakshatra {
//   Ashwini = 1,
//   Bharani,
//   Krittika,
//   Rohini,
//   Mrigashira,
//   Ardra,
//   Punarvasu,
//   Pushya,
//   Ashlesha,
//   Magha,
//   PurvaPhalguni,
//   UttaraPhalguni,
//   Hasta,
//   Chitra,
//   Swati,
//   Vishaka,
//   Anuradha,
//   Jyesta,
//   Moola,
//   Purvashada,
//   Uttarashada,
//   Shravana,
//   Dhanista,
//   Shatabhisha,
//   Purvabhadra,
//   Uttarabhadra,
//   Revati,
// }
export function getNakshatraStringValue(naks: Nakshatra): string {
    return Nakshatra[naks]; // This will return the string representation of the enum value
  }
export const vimsottariGrahaSeq = [
  Graha.ketu,
  Graha.shukra,
  Graha.surya,
  Graha.chandra,
  Graha.mangal,
  Graha.rahu,
  Graha.guru,
  Graha.shani,
  Graha.budha,
];

// const spanOfNakshatra = 360.0 / 27.0;

// export function getNakshatraRange(nakshatra: Nakshatra): [number, number] {
//   const start = (nakshatra - 1) * spanOfNakshatra;
//   const end = nakshatra * spanOfNakshatra;
//   return [start, end];
// }

// export function nakshatraPada(deg: number): [Nakshatra, Pada] {
//     let nakshatra: Nakshatra = Nakshatra.Ashwini;
//     let pada: Pada = Pada.Pada1;
  
//     const nakshatraValues = Object.values(Nakshatra).filter(
//       (value) => typeof value === 'number'
//     ) as Nakshatra[];
  
//     const padaValues = Object.values(Pada).filter(
//       (value) => typeof value === 'number'
//     ) as Pada[];
  
//     for (const naks of nakshatraValues) {
//       const [start, end] = getNakshatraRange(naks);
//       if (deg >= start && deg < end) {
//         nakshatra = naks;
//         // Find pada
//         for (const pad of padaValues) {
//           const padRange = getPadaRange(pad, start);
//           if (deg >= padRange[0] && deg < padRange[1]) {
//             pada = pad;
//           }
//         }
//       }
//     }
//     return [nakshatra, pada];
//   }

export function getVimsottariLord(nakshatra: Nakshatra): Graha {
  let remainder = nakshatra % 9;
  remainder = remainder === 0 ? 9 : remainder;
  return vimsottariGrahaSeq[remainder - 1];
}


// export function getPadaRange(pada: Pada, nakshatraStart: number): [number, number] {
//   const padaSpan = spanOfNakshatra / 4;
//   const start = nakshatraStart + (pada - 1) * padaSpan;
//   const end = start + padaSpan;
//   return [start, end];
// }

export function getPadaStringValue(pada: Pada): string {
    return Pada[pada]; // This will return the string representation of the enum value
  }


export function signDegString(deg: Deg): string {
    const newDeg = new Deg(deg.value % 30.0);
    return stringValue(newDeg);
}

export function signDeg(deg: Deg): Deg {
  const newDeg = new Deg(deg.value % 30.0);
  return newDeg;
}

