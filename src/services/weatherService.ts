import type { WeatherData } from "../types";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function mapResponse(data: Record<string, unknown>): WeatherData {
  const main = data.main as { temp: number };
  const weather = (data.weather as { id: number; main: string; description: string; icon: string }[])[0];
  const sys = data.sys as { country: string };

  return {
    city: data.name as string,
    country: sys.country,
    temp: Math.round(main.temp),
    description: weather.description,
    icon: weather.icon,
    conditionId: weather.id,
    conditionMain: weather.main,
  };
}

export async function fetchWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
  const data = await res.json();
  return mapResponse(data);
}

export async function fetchWeatherByCity(
  city: string
): Promise<WeatherData> {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&lang=es&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
  const data = await res.json();
  return mapResponse(data);
}
