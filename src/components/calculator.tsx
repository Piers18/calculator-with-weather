import { Grid } from "./Grid";
import { useWeatherContext } from "../context/WeatherContext";

export function Calculator() {
  const { weather, theme, loading } = useWeatherContext();

  return (
    <div
      className="glass rounded-3xl p-5 w-full max-w-sm shadow-2xl"
      style={{
        boxShadow: `0 8px 40px ${theme.glowColor}`,
      }}
    >
      {/* Weather info badge */}
      <div
        className="flex items-center justify-between mb-4 px-1"
        style={{ color: theme.accentColor }}
      >
        {loading ? (
          <span className="text-xs weather-pulse">Cargando clima…</span>
        ) : weather ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={weather.description}
                className="w-8 h-8"
              />
              <span className="text-sm font-medium capitalize">
                {weather.description}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold">{weather.temp}°C</span>
              <span className="opacity-60">·</span>
              <span className="opacity-80">{weather.city}</span>
            </div>
          </>
        ) : (
          <span className="text-xs opacity-60">{theme.label}</span>
        )}
      </div>

      <Grid />
    </div>
  );
}
