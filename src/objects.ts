import { signDeg, signDegString } from "./jyotish-ui-types";

export class Deg {
    value: number;
    degrees: number;
    minutes: number;
    seconds: number;
  
    constructor(value: number) {
      this.value = Math.abs(value); // Store absolute value
      this.degrees = Math.floor(this.value); // Extract degrees
      const remainingMinutes: number = (this.value - this.degrees) * 60; // Convert remaining part to minutes
      this.minutes = Math.floor(remainingMinutes); // Extract minutes
      this.seconds = Math.round(remainingMinutes); // Round remaining part to seconds
      if (this.seconds === 60) {
        // If seconds equals 60, adjust minutes and set seconds to 0
        this.minutes++;
        this.seconds = 0;
      }
    }

    toString(): string {
      return `${this.degrees}° ${this.minutes}' ${this.seconds}"`;
    }
  }
  
  export function stringValue(deg: Deg): string {
    return `${deg.degrees}° ${deg.minutes}' ${deg.seconds}"`;
  }

  export function sdmsString(deg: Deg): string {
    const finished = Math.floor(deg.value / 30.0);
    return finished + "s " + signDegString(deg)
  }


  export class Det {
    readonly lat: Deg;
    readonly lon: Deg;
    readonly speed: number;
  
    constructor(lat: Deg, lon: Deg, speed: number) {
      this.lat = lat;
      this.lon = lon;
      this.speed = speed;
    }
  
    toString(): string {
      return `Det(lat: ${this.lat}, lon: ${this.lon}, speed: ${this.speed})`;
    }
  }