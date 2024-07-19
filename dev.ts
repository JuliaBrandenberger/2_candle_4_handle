#!/usr/bin/env -S deno run -A --watch=static/,routes/

// development - what you work on locally, not used by the public

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

await dev(import.meta.url, "./main.ts", config);
