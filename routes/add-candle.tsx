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
        <fieldset>
          <label>Size (in oz): </label>
          <select name="size">
            <option value="32">32</option>
            <option value="14.5">14.5</option>
            <option value="2">2</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Form: </label>
          <select name="form">
            <option value="jar candle">jar candle</option>
            <option value="tea light">tea light</option>
            <option value="votive">votive</option>
            <option value="tapered candle">tapered candle</option>
            <option value="wax melt">wax melt</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Season: </label>
          <select name="season">
            <option value="fall">fall</option>
            <option value="winter">winter</option>
            <option value="spring">spring</option>
            <option value="summer">summer</option>
            <option value="all season">all season</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Holiday: </label>
          <select name="holiday">
            <option value="Halloween">Halloween</option>
            <option value="Christmas">Christmas</option>
            <option value="Easter">Easter</option>
            <option value="None">None</option>
          </select>
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