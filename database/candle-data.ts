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



// candle form is a union of strings
export type CandleForm = "jar candle" | "tea light" | "votive" | "tapered candle" | "wax melt"

export type CandleSeason = "fall" | "winter" | "spring" | "summer" | "all season"

export type CandleHoliday = "Halloween" | "Christmas" | "Easter" | "None"

// will allow typescript to tell if it is a string of the right type, you can call this fn on the string you will get to make sure it is the right holiday
export function isCandleHoliday(value: string): value is CandleHoliday {
  switch (value) {
    case "Halloween": 
    case "Christmas":
    case "Easter":
      return true;
  }
  return false;
}

// do this for form and season
export function isCandleSeason(value: string): value is CandleSeason {
  switch (value) {
    case "fall":
    case "winter":
    case "spring":
    case "summer":
    case "all season":
  }
  return false;
}

export function isCandleForm(value: string): value is CandleForm {
  switch (value) {
    case "jar candle":
    case "tea light":
    case "votive":
    case "tapered candle":
    case "wax melt":
  }
  return false;
}