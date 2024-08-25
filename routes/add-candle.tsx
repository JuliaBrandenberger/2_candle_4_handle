import { Handlers } from "$fresh/server.ts";
import { addCandle, CandleCreationInfo, getAllBrands, uuid, getExtension } from "../database/db.ts";
import { candleForms, candleSeasons, candleHolidays, isCandleSeason, isCandleForm, isCandleHoliday, Image } from "../database/candle-data.ts";
import { Dropdown } from "../components/Dropdown.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render();
  },
  async POST(req, ctx) {
    const formData = await req.formData();
    // console.log(formData.get("name"));
    // return new Response(formData.get("name"));
    // get fields needed from form, uses iscandleholiday fn to get them to the right type, build a candleinfo object, 
    // pass that to addcandle func, return the string "success" of it works "failure otherwise"
    // doublecheck database to make sure candle was added
    // put as pull request 
    const season = formData.get("season");
    // do this every time with the fields, anytime invalid return failure
    if (typeof season !== "string") {
      return new Response("failed, season is not string");
    }
    if (!isCandleSeason(season)) {
      return new Response("failed, season is not candle season");
    }
    const name = formData.get("candle-name");
    if (typeof name !== "string") {
      return new Response("failed, name is not string");
    }
    const brand = formData.get("brand");
    if (typeof brand !== "string") {
      return new Response("failed, brand is not string");
    }
    const brandID = parseInt(brand);
    const formSize = formData.get("size");
    if (typeof formSize !== "string") {
      return new Response("failed, size is not string");
    }
    const size = parseInt(formSize);
    const form = formData.get("form");
    if (typeof form !== "string") {
      return new Response("failed, form is not string");
    }
    if (!isCandleForm(form)) {
      return new Response("failed, form is not candle form");
    }
    const holiday = formData.get("holiday");
    if (typeof holiday !== "string") {
      return new Response("failed, holiday is not string");
    }
    if (!isCandleHoliday(holiday)) {
      return new Response("failed, holiday is not candle holiday");
    }
    const formScentDescription = formData.get("scentDescription");
    if (typeof formScentDescription !== "string") {
      return new Response("failed, provide scent description");
    }
    const scentDescription = formScentDescription.split(/\s*,\s*/); // regular expression for any number of spaces, comma, and any number of spaces
    const formColor = formData.get("color");
    if (typeof formColor !== "string") {
      return new Response("failed, provide at least one color");
    }
    const color = formColor.split(/\s*,\s*/); 
    const formYear = formData.get("year");
    if (typeof formYear !== "string") {
      return new Response("failed, brand is not string");
    }
    const year = parseInt(formYear);
    const notes = formData.get("notes");
    if (typeof notes !== "string") {
      return new Response("failed, notes is not string");
    }
    const formImage = formData.get("image");
    if (typeof formImage === "string") {
      return new Response("failed, image is not a file");
    }
    let image: Image | null;
    if (formImage) {
      const filePath = uuid();
      const extension = getExtension(formImage.name);
      Deno.writeFile(`./media/${filePath}${extension}`, formImage.stream());
      image = {
        path: `./media/${filePath}`,
        title: formImage.name,
      };
    }
    else {
      image = null;
    }

    
    

    const candle: CandleCreationInfo = {
      form,
      brandID,
      name,
      size,
      season, 
      holiday,
      scentDescription,
      color, 
      year,
      notes,
      image

    };  

    addCandle(candle);

    return new Response(name);
  }
};

// export default function- used by our framework to load the html (know what html to display)
export default function AddCandle() {
  const brandOptions: [string, string][] = getAllBrands().map(brand => [brand.id.toString(), brand.name]);
  const sizeOptions: string[] = ["32", "14.5", "2"];
  return (
    <div>
      <h1>Add Your Candle!</h1>
      <form method="POST" enctype="multipart/form-data">
        <fieldset>
          <label>Candle Name: </label>
          <input name="candle-name"></input>
        </fieldset>
        <fieldset>
          <label>Brand: </label>
          <Dropdown name="brand" options={brandOptions}></Dropdown>
        </fieldset>
        <fieldset>
          <label>Size (in oz): </label>
          <Dropdown name="size" options={sizeOptions}></Dropdown>
        </fieldset>
        <fieldset>
          <label>Form: </label>
          <Dropdown name="form" options={candleForms}></Dropdown>
        </fieldset>
        <fieldset>
          <label>Season: </label>
          <Dropdown name="season" options={candleSeasons}></Dropdown>
        </fieldset>
        <fieldset>
          <label>Holiday: </label>
          <Dropdown name="holiday" options={candleHolidays}></Dropdown>
        </fieldset>
        <fieldset>
          <label>Scent Description: </label>
          <input name="scentDescription"></input>
        </fieldset>
        <fieldset>
          <label>Color: </label>
          <input name="color"></input>
        </fieldset>
        <fieldset>
          <label>Year: </label>
          <input name="year"></input>
        </fieldset>
        <fieldset>
          <label>Notes: </label>
          <input name="notes"></input>
        </fieldset>
        <fieldset>
          <label>Image: </label>
          <input type="file" name="image"></input>
        </fieldset>
        
        <input type="submit"></input> 
      </form>
    </div>
  )
}

// TODO:
// ADD RESt of fields
// update post method to make sure getting all the rigth data
// inside of POST method
// once form is finished cahgen post method so taht you can create a candlecreationinfo object
// call add candle method to add to database
// 