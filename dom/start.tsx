import puppeteer from "https://deno.land/x/puppeteer@9.0.0/mod.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { assert } from "https://deno.land/std@0.146.0/testing/asserts.ts";

// assigning url to the first argument passed to Deno CLI
const url = Deno.args[0];

// assign element to search for as second argument
const el = Deno.args[1];

try {
  // launch browser
  const browser = await puppeteer.launch();
  // launch page
  const page = await browser.newPage();
  // navigate to url
  await page.goto(url);

  // assign url HTML content to html
  const html = await page.content();

  // parse html to DOM structure
  const document: any = new DOMParser().parseFromString(html, "text/html");

  // select h1 from the new DOM structure
  const pageHeader = document.querySelector(el);

  // check to make sure an h1 was found
  if (pageHeader) {
    // return the page header's text content
    console.log(pageHeader.textContent);
  } else {
    // no h1 found
    console.log("no h1 found");
  }
} catch (error) {
  console.log(error);
}

Deno.exit(1);
