// web form to add a brand
import { Handlers } from "$fresh/server.ts";
import { addBrand, BrandCreationInfo, getAllBrands} from "../database/db.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render();
  },
  async POST(req, ctx) {
    const formData = await req.formData();

    const name = formData.get("candle-name");
    if (typeof name !== "string") {
      return new Response("failed, name is not string");
    }
    const brands = getAllBrands();
    if (brands.some(brand => brand.name === name)) {
      return new Response("failed, brand is already in brands list");
    }
    const website = formData.get("website");
    if (typeof website !== "string") {
      return new Response("failed, website is not string");
    }
    
    const brand: BrandCreationInfo = {
      name,
      website,
    }

    addBrand(brand);

    return new Response("added your brand");
  }
}

export default function AddBrand() {
  return (
    <div>
      <h1>Add Your Brand!</h1>
      <form method="POST">
        <fieldset>
          <label>Brand Name: </label>
          <input name="candle-name"></input>
        </fieldset>
        <fieldset>
          <label>website: </label>
          <input name="website"></input>
        </fieldset>
        
        <input type="submit"></input>
      </form>
    </div>
  )
}




//TODO:
// ADD Check to make sure that someone doesn't try to add a brand that's already there