import { FreshContext } from "$fresh/server.ts";
import { getCandle } from "../../../../database/db.ts";

// handler to return candle info, takes request and returns response with additional context object available
export const handler = (_req: Request, ctx: FreshContext): Response => {
  // ctx(context) has a field called params, and a field in params called "id", this id comes from our nameing the file [id]
  // see foo example for clarity
  // call parseInt on it bc must be an int
  const id = parseInt(ctx.params["id"]);
  // body must be a string, we call getcandleid with the id
  const body = JSON.stringify(getCandle(id), null, 2);
  return new Response(body);
};

// /api/candle/get/42
// /api/candle/get/:id
// /api/candle/get/[id].ts 

