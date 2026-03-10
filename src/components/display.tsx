import { CiCalculator1 } from "react-icons/ci";
import { useWeatherContext } from "../context/WeatherContext";

interface DisplayProps {
  expression: string;
  display: string;
}

export function Display({ expression, display }: DisplayProps) {
  const { theme } = useWeatherContext();

  // Dynamically adjust font size based on display length
  const fontSize =
    display.length > 11
      ? "1.25rem"
      : display.length > 8
        ? "1.75rem"
        : "2.25rem";

  return (
    <div
      className="glass-light rounded-2xl p-5 mb-2"
      style={{
        boxShadow: `0 0 30px ${theme.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`,
      }}
    >
      {/* Expression line */}
      <div className="flex items-center gap-2 mb-3 min-h-6">
        <CiCalculator1
          className="text-lg shrink-0"
          style={{ color: theme.accentColor }}
        />
        <span
          className="text-sm font-light tracking-wide truncate"
          style={{ color: theme.accentColor, opacity: 0.8 }}
        >
          {expression || " "}
        </span>
      </div>

      {/* Result line */}
      <div className="flex justify-end">
        <span
          className="font-semibold display-number tracking-tight"
          style={{ fontSize, color: theme.textColor }}
        >
          {display}
        </span>
      </div>
    </div>
  );
}
