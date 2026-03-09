type ButtonCustomProps = {
  label: string;
  onClickCustom: (value: string) => void;
  variant?: "number" | "operator" | "action";
  className?: string;
};

export function ButtonCustom({
  label,
  onClickCustom,
  variant,
  className,
}: ButtonCustomProps) {
  return (
    <button className={className} onClick={() => onClickCustom(label)}>
      {label}
    </button>
  );
}
