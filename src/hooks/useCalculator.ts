import { useReducer, useCallback } from "react";
import type { CalcState, CalcAction } from "../types";

const initialState: CalcState = {
  display: "0",
  expression: "",
  previousValue: null,
  operator: null,
  waitingForOperand: false,
  justEvaluated: false,
};

function calculate(a: number, operator: string, b: number): number {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? NaN : a / b;
    default: return b;
  }
}

function formatNumber(n: number): string {
  if (isNaN(n)) return "Error";
  if (!isFinite(n)) return "Error";
  // Avoid overly long decimals
  const str = parseFloat(n.toPrecision(12)).toString();
  return str.length > 14 ? n.toExponential(6) : str;
}

function calcReducer(state: CalcState, action: CalcAction): CalcState {
  switch (action.type) {
    case "CLEAR":
      return { ...initialState };

    case "DIGIT": {
      const digit = action.payload;
      if (state.waitingForOperand || state.justEvaluated) {
        return {
          ...state,
          display: digit,
          expression: state.justEvaluated ? "" : state.expression,
          waitingForOperand: false,
          justEvaluated: false,
        };
      }
      const newDisplay = state.display === "0" ? digit : state.display + digit;
      if (newDisplay.length > 14) return state; // limit digits
      return { ...state, display: newDisplay };
    }

    case "DECIMAL": {
      if (state.waitingForOperand || state.justEvaluated) {
        return {
          ...state,
          display: "0.",
          expression: state.justEvaluated ? "" : state.expression,
          waitingForOperand: false,
          justEvaluated: false,
        };
      }
      if (state.display.includes(".")) return state;
      return { ...state, display: state.display + "." };
    }

    case "OPERATOR": {
      const op = action.payload;
      const current = parseFloat(state.display);

      if (state.operator && !state.waitingForOperand && !state.justEvaluated) {
        // Chain: evaluate previous operation first
        const result = calculate(state.previousValue!, state.operator, current);
        const formatted = formatNumber(result);
        return {
          display: formatted,
          expression: `${formatted} ${op}`,
          previousValue: result,
          operator: op,
          waitingForOperand: true,
          justEvaluated: false,
        };
      }

      return {
        ...state,
        expression: `${state.display} ${op}`,
        previousValue: current,
        operator: op,
        waitingForOperand: true,
        justEvaluated: false,
      };
    }

    case "EQUALS": {
      if (state.operator === null || state.previousValue === null) return state;
      const current = parseFloat(state.display);
      const result = calculate(state.previousValue, state.operator, current);
      const formatted = formatNumber(result);
      return {
        display: formatted,
        expression: `${state.previousValue} ${state.operator} ${current} =`,
        previousValue: null,
        operator: null,
        waitingForOperand: false,
        justEvaluated: true,
      };
    }

    case "PERCENT": {
      const current = parseFloat(state.display);
      const result = current / 100;
      return {
        ...state,
        display: formatNumber(result),
        justEvaluated: true,
      };
    }

    case "TOGGLE_SIGN": {
      const current = parseFloat(state.display);
      return {
        ...state,
        display: formatNumber(current * -1),
      };
    }

    default:
      return state;
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const handleButton = useCallback(
    (label: string) => {
      if (label === "C") {
        dispatch({ type: "CLEAR" });
      } else if (label === "+/-") {
        dispatch({ type: "TOGGLE_SIGN" });
      } else if (label === "%") {
        dispatch({ type: "PERCENT" });
      } else if (label === ".") {
        dispatch({ type: "DECIMAL" });
      } else if (label === "=") {
        dispatch({ type: "EQUALS" });
      } else if (["+", "-", "*", "/"].includes(label)) {
        dispatch({ type: "OPERATOR", payload: label });
      } else {
        dispatch({ type: "DIGIT", payload: label });
      }
    },
    []
  );

  return { state, handleButton };
}
