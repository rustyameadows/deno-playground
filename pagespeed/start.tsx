// deno run -A start.tsx https://rustyameadows.com

const suppliedUrl = Deno.args[0];

function setUpQuery() {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

  const parameters = {
    url: encodeURIComponent(suppliedUrl),
  };

  let query = `${api}?`;

  for (var key in parameters) {
    query += `${key}=${parameters[key]}`;
  }

  query += `&category=performance&category=accessibility&category=seo`;

  return query;
}

const url = setUpQuery();
console.log(url);

const jsonResponse = await fetch(url);

const jsonData = await jsonResponse.json();

const lighthouse = jsonData.lighthouseResult;

// console.log(lighthouse.categories);

const performanceScore = lighthouse.categories["performance"].score * 100;
const accessibilityScore = lighthouse.categories["accessibility"].score * 100;
const seoScore = lighthouse.categories["seo"].score * 100;

const lighthouseMetrics = {
  "Performance Score": performanceScore,
  "Accessibility Score": accessibilityScore,
  "SEO Score": seoScore,
  "First Contentful Paint":
    lighthouse.audits["first-contentful-paint"].displayValue,
  "Speed Index": lighthouse.audits["speed-index"].displayValue,
  "Time To Interactive": lighthouse.audits["interactive"].displayValue,
  "First Meaningful Paint":
    lighthouse.audits["first-meaningful-paint"].displayValue,
};

console.log(lighthouseMetrics);

Deno.exit(1);
