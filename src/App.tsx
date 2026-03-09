import { FcCalculator } from "react-icons/fc";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <>
      <nav>
        <div>
          <span>
            <FcCalculator/>
          </span>
          Weather Calculator
        </div>
      </nav>
      <main>
        <Calculator />
      </main>
    </>
  );
}

export default App;
