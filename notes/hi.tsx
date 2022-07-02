// import { serve } from "https://deno.land/std@0.146.0/http/server.ts";
//
// const port = 8080;
//
// const handler = (request: Request): Response => {
//   const body = `<h1>Your user-agent is:\n\n${
//     request.headers.get("user-agent") ?? "Unknown"
//   }</h1>`;
//
//   return new Response(body, { status: 200 });
// };
//
// console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
// await serve(handler, { port });
/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

/** @jsx h  */
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, html } from "https://deno.land/x/htm/mod.tsx";
import { UnoCSS } from "https://deno.land/x/htm/plugins.ts";

// enable UnoCSS
html.use(UnoCSS());

serve((res) =>
  html({
    lang: "en",
    title: "Hello World!",
    meta: {
      description: "This is a description.",
    },
    links: [
      { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" },
    ],
    scripts: [
      `console.log("Hello World!")`,
    ],
    body: (
      <div class="flex items-center justify-center w-screen h-screen">
        <p class="text-5xl font-bold text-green-600">Hello World!</p>
      </div>
    ),
  })
);
