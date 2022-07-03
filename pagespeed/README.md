Resources:

Tried to use

Ran into issue:

```
error: Uncaught SyntaxError: The requested module 'https://deno.land/std/flags/mod.ts' does not provide an export named 'Args'
export { parse, Args } from "https://deno.land/std/flags/mod.ts";
```

Not sure I need this library right now. Going to try and use the google API
directly via fetch

Next solution:

https://developers.google.com/speed/docs/insights/v5/get-started

Based on this example:
https://developers.google.com/speed/docs/insights/v5/get-started#javascript

Helpful info -
https://gist.github.com/alekseykulikov/b5b88e4f8495c39cdcf39bc05d6b50c7
