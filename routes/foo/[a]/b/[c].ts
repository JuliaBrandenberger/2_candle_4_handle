import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, ctx: FreshContext): Response => {
  const body = JSON.stringify(ctx, null, 2);
  return new Response(body);
}

// when fresh runs and sees that you have this route here, it says I'll match anything between 
// foo and b and i;ll make that string avaialbe as that strings object under a
// and the same with c, since it's in square braces
// the user is giving info and passing that into the url

// it's like wikipedia.org/wiki/[pagename]

// with our candle example, the user provies some id
// that's just a paramter to the api that is called
// framework is just making it avaiable as part of the route