import { FcCalculator } from "react-icons/fc";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <div className="min-h-screen bg-surface-dark">
      <nav className="flex justify-center items-center p-4 bg-surface-base">
        <div className="flex justify-center items-center gap-2.5">
          <span className="text-2xl">
            <FcCalculator />
          </span>
          <h1 className="text-primary-200 font-semibold tracking-wide">
            Weather Calculator
          </h1>
        </div>
      </nav>
      <main className="flex justify-center">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
