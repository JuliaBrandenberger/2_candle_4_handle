// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $add_brand from "./routes/add-brand.tsx";
import * as $add_candle from "./routes/add-candle.tsx";
import * as $api_candle_get_id_ from "./routes/api/candle/get/[id].ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $candles_id_ from "./routes/candles/[id].tsx";
import * as $foo_a_b_c_ from "./routes/foo/[a]/b/[c].ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/add-brand.tsx": $add_brand,
    "./routes/add-candle.tsx": $add_candle,
    "./routes/api/candle/get/[id].ts": $api_candle_get_id_,
    "./routes/api/joke.ts": $api_joke,
    "./routes/candles/[id].tsx": $candles_id_,
    "./routes/foo/[a]/b/[c].ts": $foo_a_b_c_,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
