const API_KEY = "w_ufL5so_3QpOCDWopTu2K-QS856N679LLurqW-Zn0A";

// https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=en&apiKey=${HERE_API_KEY}
export async function getAddress(lat, lng) {
  const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=en&apiKey=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw Error("Failed to fetch address!");
  }
  const data = await response.json();
  const address = data.items[0].title;
  return address;
}

// https://revgeocode.search.hereapi.com/v1/revgeocode?at=35.83215825054104%2C10.636728453491004&lang=en&apiKey=w_ufL5so_3QpOCDWopTu2K-QS856N679LLurqW-Zn0A
