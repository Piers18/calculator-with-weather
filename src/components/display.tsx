import { CiCalculator1 } from "react-icons/ci";

export function Display() {
    return (
        <div className="flex justify-around items-center bg-surface-light rounded-lg p-4" >
            <div className="flex justify-center items-center text-xl">
                <CiCalculator1 />
            </div>
            <div className="flex flex-col justify-center items-end">
                <span>120 + 25</span>
                <span className="text-xl">145</span>
            </div>
        </div>
    );
}