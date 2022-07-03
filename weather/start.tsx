// deno run -A start.tsx 90042

const suppliedZipcode = Deno.args[0];

// convert zipcode to lat/long

// const geoAPI =
`https://geocoding.geo.census.gov/geocoder/locations/address?zipcode=${suppliedZipcode}&benchmark=Public_AR_Current&format=json`;

const geoAPI =
  `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`;

console.log(geoAPI);

// const geoAPI = `https://geocode.xyz/${suppliedZipcode}?json=1`;

const geoAPIResponse = await fetch(geoAPI);

const geoAPIJsonData = await geoAPIResponse.json();

console.log(geoAPIJsonData);

// console.log(geoAPIJsonData.longt);
// console.log(geoAPIJsonData.latt);

// convert lat/long to weather.gov grid section

const pointURL =
  `https://api.weather.gov/points/${geoAPIJsonData.longt},${geoAPIJsonData.latt}`;

const pointResponse = await fetch(pointURL);

const pointJsonData = await pointResponse.json();

console.log(pointJsonData);

//

const url = `https://api.weather.gov/gridpoints/LOX/155,48/forecast/hourly`;

console.log(url);

const jsonResponse = await fetch(url);

const jsonData = await jsonResponse.json();

// console.log(jsonData);

const weatherReport = {
  "Current Temp": jsonData.properties.periods[0].temperature,
};

console.log(weatherReport);

Deno.exit(1);
