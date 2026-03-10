import { useWeatherContext } from "../context/WeatherContext";

type ButtonCustomProps = {
  label: string;
  onClickCustom: (value: string) => void;
  variant?: "number" | "operator" | "action";
  className?: string;
};

const variantStyles: Record<string, React.CSSProperties> = {
  number: {
    background: "rgba(255, 255, 255, 0.08)",
    color: "#e2e8f0",
  },
  action: {
    background: "rgba(255, 255, 255, 0.12)",
    color: "#cbd5e1",
  },
};

export function ButtonCustom({
  label,
  onClickCustom,
  variant = "number",
  className = "",
}: ButtonCustomProps) {
  const { theme } = useWeatherContext();

  const style: React.CSSProperties =
    variant === "operator"
      ? {
          background: theme.buttonAccent,
          color: "#fff",
          boxShadow: `0 4px 14px ${theme.glowColor}`,
        }
      : (variantStyles[variant] ?? variantStyles.number);

  return (
    <button
      className={`btn-calc ${className}`}
      style={style}
      onClick={() => onClickCustom(label)}
    >
      {label}
    </button>
  );
}
