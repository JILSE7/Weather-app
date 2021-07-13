
export const getUrl = (type,city, countryCode) => `https://api.openweathermap.org/data/2.5/${type}?q=${city},${countryCode}&appid=d65500d1eac223e1ff9e9839574a0f06`;