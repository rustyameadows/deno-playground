import { runPagespeed } from "https://deno.land/x/pagespeed/mod.ts";

const data = await runPagespeed("https://developers.google.com", {
  strategy: "mobile",
});

console.log(data);

Deno.exit(1);
