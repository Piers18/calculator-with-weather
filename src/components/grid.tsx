import { ButtonCustom } from "./ButtonCustom";
import { Display } from "./Display";
import { useCalculator } from "../hooks/useCalculator";

export function Grid() {
  const { state, handleButton } = useCalculator();

  return (
    <div>
      <Display expression={state.expression} display={state.display} />

      <div className="grid grid-cols-4 gap-3 mt-3">
        {/* Row 1 — Actions & divide */}
        <ButtonCustom label="C" variant="action" onClickCustom={handleButton} />
        <ButtonCustom
          label="+/-"
          variant="action"
          onClickCustom={handleButton}
        />
        <ButtonCustom label="%" variant="action" onClickCustom={handleButton} />
        <ButtonCustom
          label="/"
          variant="operator"
          onClickCustom={handleButton}
        />

        {/* Row 2 */}
        <ButtonCustom label="7" variant="number" onClickCustom={handleButton} />
        <ButtonCustom label="8" variant="number" onClickCustom={handleButton} />
        <ButtonCustom label="9" variant="number" onClickCustom={handleButton} />
        <ButtonCustom
          label="*"
          variant="operator"
          onClickCustom={handleButton}
        />

        {/* Row 3 */}
        <ButtonCustom label="4" variant="number" onClickCustom={handleButton} />
        <ButtonCustom label="5" variant="number" onClickCustom={handleButton} />
        <ButtonCustom label="6" variant="number" onClickCustom={handleButton} />
        <ButtonCustom
          label="-"
          variant="operator"
          onClickCustom={handleButton}
        />

        {/* Row 4 */}
        <ButtonCustom label="1" variant="number" onClickCustom={handleButton} />
        <ButtonCustom label="2" variant="number" onClickCustom={handleButton} />
        <ButtonCustom label="3" variant="number" onClickCustom={handleButton} />
        <ButtonCustom
          label="+"
          variant="operator"
          onClickCustom={handleButton}
        />

        {/* Row 5 —  0 spans 2 cols */}
        <ButtonCustom
          className="col-span-2"
          label="0"
          variant="number"
          onClickCustom={handleButton}
        />
        <ButtonCustom label="." variant="number" onClickCustom={handleButton} />
        <ButtonCustom
          label="="
          variant="operator"
          onClickCustom={handleButton}
        />
      </div>
    </div>
  );
}
