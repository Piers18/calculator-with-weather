import type { WeatherTheme } from "../types";

// Maps OpenWeatherMap condition groups to visual themes
// See: https://openweathermap.org/weather-conditions

const themes: Record<string, WeatherTheme> = {
  Thunderstorm: {
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #4a1a8a 100%)",
    accentColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.3)",
    textColor: "#e9d5ff",
    buttonAccent: "#7c3aed",
    label: "⛈️ Tormenta",
  },
  Drizzle: {
    gradient: "linear-gradient(135deg, #0c1929 0%, #1a3a5c 40%, #2563eb 100%)",
    accentColor: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.3)",
    textColor: "#dbeafe",
    buttonAccent: "#3b82f6",
    label: "🌦️ Llovizna",
  },
  Rain: {
    gradient: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 40%, #1e40af 100%)",
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.3)",
    textColor: "#bfdbfe",
    buttonAccent: "#2563eb",
    label: "🌧️ Lluvia",
  },
  Snow: {
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 40%, #7dd3fc 100%)",
    accentColor: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.2)",
    textColor: "#0c4a6e",
    buttonAccent: "#0284c7",
    label: "❄️ Nieve",
  },
  Clear: {
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 30%, #f59e0b 60%, #ea580c 100%)",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.3)",
    textColor: "#78350f",
    buttonAccent: "#d97706",
    label: "☀️ Despejado",
  },
  Clouds: {
    gradient: "linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 100%)",
    accentColor: "#94a3b8",
    glowColor: "rgba(148, 163, 184, 0.25)",
    textColor: "#e2e8f0",
    buttonAccent: "#64748b",
    label: "☁️ Nublado",
  },
  Mist: {
    gradient: "linear-gradient(135deg, #1e293b 0%, #374151 40%, #6b7280 100%)",
    accentColor: "#9ca3af",
    glowColor: "rgba(156, 163, 175, 0.2)",
    textColor: "#e5e7eb",
    buttonAccent: "#6b7280",
    label: "🌫️ Niebla",
  },
  Haze: {
    gradient: "linear-gradient(135deg, #1e293b 0%, #374151 40%, #6b7280 100%)",
    accentColor: "#9ca3af",
    glowColor: "rgba(156, 163, 175, 0.2)",
    textColor: "#e5e7eb",
    buttonAccent: "#6b7280",
    label: "🌫️ Bruma",
  },
};

// Default theme when no weather data is available — night sky vibe
export const defaultTheme: WeatherTheme = {
  gradient: "linear-gradient(135deg, #0a1628 0%, #0f2140 40%, #162d57 100%)",
  accentColor: "#22d3ee",
  glowColor: "rgba(34, 211, 238, 0.25)",
  textColor: "#e0f2fe",
  buttonAccent: "#06b6d4",
  label: "🌙 Noche",
};

export function getWeatherTheme(conditionMain: string): WeatherTheme {
  return themes[conditionMain] ?? defaultTheme;
}
