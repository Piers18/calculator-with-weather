// ── Weather Types ──────────────────────────────────────────────

export interface WeatherData {
  city: string;
  country: string;
  temp: number;
  description: string;
  icon: string;
  conditionId: number;
  conditionMain: string;
}

export interface WeatherTheme {
  gradient: string;
  accentColor: string;
  glowColor: string;
  textColor: string;
  buttonAccent: string;
  label: string;
}

// ── Calculator Types ───────────────────────────────────────────

export interface CalcState {
  display: string;
  expression: string;
  previousValue: number | null;
  operator: string | null;
  waitingForOperand: boolean;
  justEvaluated: boolean;
}

export type CalcAction =
  | { type: "DIGIT"; payload: string }
  | { type: "OPERATOR"; payload: string }
  | { type: "EQUALS" }
  | { type: "CLEAR" }
  | { type: "PERCENT" }
  | { type: "TOGGLE_SIGN" }
  | { type: "DECIMAL" };
