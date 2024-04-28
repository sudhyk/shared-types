function decimalHoursToHMS(decimalHours: number): { hours: number, minutes: number, seconds: number } {
    const hours: number = Math.floor(decimalHours);
    const remainingMinutes: number = (decimalHours - hours) * 60;
    const minutes: number = Math.floor(remainingMinutes);
    const seconds: number = Math.floor((remainingMinutes - minutes) * 60);

    return { hours, minutes, seconds };
}

export class AHDateTime {
    constructor(public year: number, public month: number, public day: number, public hours: number, public minutes: number, public seconds: number) {}
}

export function decimalHours(dateTime: AHDateTime): number {
    return dateTime.hours + (dateTime.minutes/60.0) + (dateTime.seconds/(60.0*60.0));
}

export function utcDateTime(dateTime: AHDateTime, gmtOffset: number): AHDateTime {
    return calculateUTC(dateTime.year, dateTime.month, dateTime.day, dateTime.hours, dateTime.minutes, dateTime.seconds, gmtOffset);
}

export function toUnixTimestamp(dateTime: AHDateTime): number {
    // Create a new Date object using the provided date and time components
    const date = new Date(Date.UTC(dateTime.year, dateTime.month - 1, dateTime.day, dateTime.hours, dateTime.minutes, dateTime.seconds));
    // Calculate the Unix timestamp (milliseconds since Jan 1, 1970)
    return Math.floor(date.getTime() / 1000);
}

export function calculateUTC(year: number, month: number, day: number, hours: number, minutes: number, seconds: number, timezoneDiffFromUTC: number): AHDateTime {
    const realtimezonediff: number = -timezoneDiffFromUTC;

    // Convert minutes and seconds to hours
    const minutesInHours: number = minutes / 60;
    const secondsInHours: number = seconds / 3600;

    // Add hours, minutes, and seconds together
    let totalHours: number = hours + minutesInHours + secondsInHours + realtimezonediff;

    // Handle when totalHours is negative
    while (totalHours < 0) {
        totalHours += 24;
        day--;
        if (day < 1) {
            month--;
            if (month < 1) {
                year--;
                month = 12;
            }
            day = _daysInMonth(year, month);
        }
    }

    // Handle when totalHours is greater than or equal to 24
    while (totalHours >= 24) {
        totalHours -= 24;
        day++;
        if (day > _daysInMonth(year, month)) {
            day = 1;
            month++;
            if (month > 12) {
                year++;
                month = 1;
            }
        }
    }

    const decoded = decimalHoursToHMS(totalHours);

    return new AHDateTime(year, month, day, decoded.hours, decoded.minutes, decoded.seconds);
}

function _daysInMonth(year: number, month: number): number {
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    } else if ([4, 6, 9, 11].indexOf(month) != -1) {
        return 30;
    } else {
        return 31;
    }
}

export function toJulianDate(year: number, month: number, day: number, hours: number, minutes: number, seconds: number): number {
    // Calculate Julian Date (JD)
    const a: number = Math.floor((14 - month) / 12);
    const y: number = year + 4800 - a;
    const m: number = month + 12 * a - 3;
    let jd: number = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

    // Add fractional part for the time of the day
    const fractionalDay: number = (hours + (minutes + seconds / 60.0) / 60.0) / 24.0;
    jd += fractionalDay - 0.5; // Adjust for half-day offset

    return jd;
}

export function fromJulianDate(julianDate: number): AHDateTime {
    
    // Calculate time components
    const z: number = Math.floor(julianDate + 0.5);
    const f: number = (julianDate + 0.5) - z;
    const alpha: number = Math.floor((z - 1867216.25) / 36524.25);
    const A: number = z + 1 + alpha - Math.floor(alpha / 4);
    const B: number = A + 1524;
    const C: number = Math.floor((B - 122.1) / 365.25);
    const D: number = Math.floor(365.25 * C);
    const E: number = Math.floor((B - D) / 30.6001);
    
    let day: number = B - D - Math.floor(30.6001 * E) + f;
    let month: number = (E < 14) ? (E - 1) : (E - 13);
    let year: number = (month > 2) ? (C - 4716) : (C - 4715);
    
    // Calculate hours, minutes, and seconds
    const fractionalDay: number = (day - Math.floor(day)) * 24;
    let hours: number = Math.floor(fractionalDay);
    let remainingMinutes: number = (fractionalDay - hours) * 60;
    let minutes: number = Math.floor(remainingMinutes);
    let seconds: number = Math.floor((remainingMinutes - minutes) * 60);

    // Check for rounding off seconds
    const fractionSeconds = (remainingMinutes - minutes) * 60 - seconds;
    if (fractionSeconds >= 0.5) {
        seconds += 1;
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
            if (minutes >= 60) {
                minutes = 0;
                hours += 1;
                if (hours >= 24) {
                    hours = 0;
                    day += 1;

                    const daysInMonth = _daysInMonth(year, month);
                    if (day > daysInMonth) {
                        day = 1;
                        month += 1;
                        if (month > 12) {
                            month = 1;
                            year += 1;
                        }
                    }

                }
            }
        }
    }


    return new AHDateTime(year, month, Math.floor(day), hours, minutes, seconds);
}

export function displayableString(juld: number, gmtOffset: number) {
    const dateTime = fromJulianDate(juld + gmtOffset / 24);

    const month = dateTime.month < 10 ? `0${dateTime.month}` : dateTime.month
    const day = dateTime.day < 10 ? `0${dateTime.day}` : dateTime.day

    const hours = dateTime.hours < 10 ? `0${dateTime.hours}` : dateTime.hours
    const minutes = dateTime.minutes < 10 ? `0${dateTime.minutes}` : dateTime.minutes
    const seconds = dateTime.seconds < 10 ? `0${dateTime.seconds}` : dateTime.seconds

    return dateTime.year + "/" + month + "/" + day + " " + hours + ":" + minutes+":"+seconds;
}
