import rawData from "./db.json" with { type: "json" };
import {Brand, Candle, Data} from "./candle-data.ts";

const data: Data = rawData;

// a CandleCreationInfo is a Candle without id or image
export type CandleCreationInfo = Omit<Candle, "id"|"image">

// a BrandCreationInfo is a Brand without an id
export type BrandCreationInfo = Omit<Brand, "id">

// define api here

// code here
// add a candle
export function addCandle(candleInfo: CandleCreationInfo) {
  // assign candle id to candle
  const id = getNextCandleId();
  const image = null;
  const candle: Candle = {
    /// ...candleInfo will copy all of the fields from candleInfo
    ...candleInfo, 
    /// id: id, the value of id is id (the id we created in this function)
    id: id, 
    // image, is a shorthand for image: image, (we could do that for id) - if there's something in scope that has this name use its value for this field
    image, 
  };
  // assign image
  data.candles.push(candle);
  saveData();
}

// for now return Candle, but probably update later
export function getCandle(candleID: number): Candle | null {
  for (const candle of data.candles) {
    if (candle.id === candleID) {
      return candle;
    }
  }
  return null;
}

// each candle should have a unique ID, in order to get that ID return 1 larger than the largest ID currently available
function getNextCandleId(): number {
  // get the max of the list and add 1 to it
  // ... says there could be any number of params here, => candle.id says return candle id, 0 in front of ... adds 0 to the list so that if there's an empty list 0 will be the max. Adding 0 to the list so that it can't be called with an empty list
  const newID = Math.max(0, ...data.candles.map(candle => candle.id)) + 1;
  return newID;
}

export function addBrand(brandInfo: BrandCreationInfo) {
  const id = getNextBrandId()
  const brand: Brand = {
    ...brandInfo,
    id,
  }
  data.brands.push(brand)
  saveData();
}

function getNextBrandId(): number {
  const newID = Math.max(0, ...data.brands.map(brand => brand.id)) + 1;
  return newID;
}

// returns a brand if given id number
export function getBrand(brandID: number): Brand | null {
  for (const brand of data.brands) {
    if (brand.id === brandID) {
      return brand;
    }
  }
  return null;
}

// returns all brand objects
export function getAllBrands(): ReadonlyArray<Brand> {
  return data.brands;
}

// end api definition

async function saveData() {
  const json = JSON.stringify(data, null, 2); // print with 2 indentation
  await Deno.writeTextFile("db.json", json);
}