type ButtonCustomProps = {
  label: string;
  onClickCustom: (value: string) => void;
  variant?: "number" | "operator" | "action";
};

export function ButtonCustom({ label, onClickCustom, variant }: ButtonCustomProps) {
  return <button onClick={() => onClickCustom(label)}>{label}</button>;
}
