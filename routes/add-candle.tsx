import { Handlers } from "$fresh/server.ts";
import { getAllBrands } from "../database/db.ts";
import CandlePage from "./candles/[id].tsx";

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
  const options = getAllBrands().map(brand => <option value={brand.id}>{brand.name}</option>)
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
          <select name="brand">
            {options}
          </select>
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