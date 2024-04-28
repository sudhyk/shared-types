import { Deg } from "../objects";

// Define a utility function for double normalization
export function normalize(value: number): number {
    if (value < 0.0) {
      return 360.0 + value;
    } else if (value > 360.0) {
      return value - 360.0;
    } else {
      return value;
    }
  }
  
  // Define a utility function for Deg normalization
  export function normalizeDeg(deg: Deg): Deg {
    const value = deg.value;
    if (value < 0.0) {
      return new Deg(360.0 + value);
    } else if (value > 360.0) {
      return new Deg(value - 360.0);
    } else {
      return deg;
    }
  }

  export function normalizeNum(value: number): number {
    if (value < 0.0) {
      return 360.0 + value;
    } else if (value > 360.0) {
      return value - 360.0;
    } else {
      return value;
    }
  }