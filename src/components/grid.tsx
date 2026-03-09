import { ButtonCustom } from "./ButtonCustom";

export function Grid() {
    return (
        <>
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
            <ButtonCustom label="=" variant="operator" onClickCustom={() => { }} />
        </>
    );
}