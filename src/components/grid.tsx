import { ButtonCustom } from "./ButtonCustom";

export function Grid() {
    return (
        <div className="grid grid-cols-4 grid-rows-5 gap-4 p-4 mt-4 bg-surface-base rounded-lg">
            <ButtonCustom label="C" variant="action" onClickCustom={() => {console.log('Presionaste: C')}} />
            <ButtonCustom label="+/-" variant="action" onClickCustom={() => { }} />
            <ButtonCustom label="%" variant="action" onClickCustom={() => { }} />
            <ButtonCustom label="/" variant="operator" onClickCustom={() => { }} />

            <ButtonCustom label="7" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="8" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="9" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="*" variant="operator" onClickCustom={() => { }} />

            <ButtonCustom label="4" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="5" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="6" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="-" variant="operator" onClickCustom={() => { }} />

            <ButtonCustom label="1" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="2" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="3" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="+" variant="operator" onClickCustom={() => { }} />

            <ButtonCustom label="0" variant="number" onClickCustom={() => { }} />
            <ButtonCustom label="." variant="operator" onClickCustom={() => { }} />
            <ButtonCustom className="col-span-2" label="=" variant="operator" onClickCustom={() => { }} />
        </div>
    );
}