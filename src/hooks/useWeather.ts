import { useState, useEffect, useCallback } from "react";
import type { WeatherData, WeatherTheme } from "../types";
import { fetchWeatherByCoords, fetchWeatherByCity } from "../services/weatherService";
import { getWeatherTheme, defaultTheme } from "../utils/weatherTheme";

const REFRESH_INTERVAL = 10 * 60 * 1000; // 10 minutes
const FALLBACK_CITY = "Lima";

interface UseWeatherReturn {
  weather: WeatherData | null;
  theme: WeatherTheme;
  loading: boolean;
  error: string | null;
}

export function useWeather(): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [theme, setTheme] = useState<WeatherTheme>(defaultTheme);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let data: WeatherData;

      // Try geolocation first
      if ("geolocation" in navigator) {
        try {
          const position = await new Promise<GeolocationPosition>(
            (resolve, reject) =>
              navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 5000,
                maximumAge: 300000,
              })
          );
          data = await fetchWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
        } catch {
          // Geolocation denied or failed → fallback to city
          data = await fetchWeatherByCity(FALLBACK_CITY);
        }
      } else {
        data = await fetchWeatherByCity(FALLBACK_CITY);
      }

      setWeather(data);
      setTheme(getWeatherTheme(data.conditionMain));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error al obtener el clima";
      setError(message);
      setTheme(defaultTheme);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  return { weather, theme, loading, error };
}
