import { createContext, useContext } from "react";
import type { WeatherData, WeatherTheme } from "../types";
import { useWeather } from "../hooks/useWeather";
import { defaultTheme } from "../utils/weatherTheme";

interface WeatherContextValue {
  weather: WeatherData | null;
  theme: WeatherTheme;
  loading: boolean;
  error: string | null;
}

const WeatherContext = createContext<WeatherContextValue>({
  weather: null,
  theme: defaultTheme,
  loading: true,
  error: null,
});

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const value = useWeather();

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}
