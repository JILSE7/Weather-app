
export const getUrl = (type,city, countryCode) => `https://api.openweathermap.org/data/2.5/${type}?q=${city},${countryCode}&appid=823dee69d4da95742d6df214be11bfb2`;