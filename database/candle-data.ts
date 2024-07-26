// What are the fields on the candle object?
// all plain data: arrays, obj, str, numbers, bools. not functions or class instances.


// 'type' says we're defining a type, {} says we're defining an object
export type Candle = {
  brandID: number;
  name: string;
  id: number;
  size: number | null; // size optional for tea lights and tapered
  form: CandleForm;
  season: CandleSeason;
  holiday: CandleHoliday | null;
  scentDescription: string[]; // options for them to choose from
  color: string[];
  year: number | null;
  notes: string | null;
  image: Image | null;
}

// Brand has its own type because, if any of the fields associated w/ a brand change, we want them to change across the board. Ex: website change
export type Brand = {
  name: string;
  website: string;
  id: number;
}

export type Image = {
  path: string;
  title: string;
}

// Data is the type of our database, the type of the data that we store in the json file
export type Data = {
  candles: Candle[];
  brands: Brand[];
}

export const candleForms = [
  "jar candle",
  "tea light",
  "votive",
  "tapered candle",
  "wax melt",
] as const;

export type CandleForm = (typeof candleForms)[number];

export const candleSeasons = [
  "fall",
  "winter",
  "spring",
  "summer",
  "all season",
] as const;

export type CandleSeason = (typeof candleSeasons)[number];

export const candleHolidays = [
  "Halloween",
  "Christmas",
  "Easter",
  "None",
] as const;

export type CandleHoliday = (typeof candleHolidays)[number];

// will allow typescript to tell if it is a string of the right type, you can call this fn on the string you will get to make sure it is the right holiday
export function isCandleHoliday(value: string): value is CandleHoliday {
  const validValues: readonly string[] = candleHolidays;
  return validValues.includes(value);
}

// do this for form and season
export function isCandleSeason(value: string): value is CandleSeason {
  const validValues: readonly string[] = candleSeasons;
  return validValues.includes(value);
}

export function isCandleForm(value: string): value is CandleForm {
  const validValues: readonly string[] = candleForms;
  return validValues.includes(value);
}
