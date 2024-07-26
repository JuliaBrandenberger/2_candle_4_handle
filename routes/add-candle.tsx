import { Handlers } from "$fresh/server.ts";
import { getAllBrands } from "../database/db.ts";
import { candleForms, candleSeasons, candleHolidays } from "../database/candle-data.ts";
import { Dropdown } from "../components/Dropdown.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    return new Response(form.get("candle-test"));
  }
}

// export default function- used by our framework to load the html (know what html to display)
export default function AddCandle() {
  const brandOptions: [string, string][] = getAllBrands().map(brand => [brand.id.toString(), brand.name]);
  const sizeOptions: string[] = ["32", "14.5", "2"];
  return (
    <div>
      <h1>Add Your Candle!</h1>
      <form method="POST">
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
        {/* // SCENT DESCRIPTION //  */}
        
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