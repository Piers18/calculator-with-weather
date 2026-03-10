import { FcCalculator } from "react-icons/fc";
import { Calculator } from "./components/Calculator";
import { useWeatherContext } from "./context/WeatherContext";

function App() {
  const { theme } = useWeatherContext();

  return (
    <div
      className="min-h-screen flex flex-col transition-all duration-1500 ease-in-out"
      style={{ background: theme.gradient }}
    >
      {/* Navbar */}
      <nav className="glass flex justify-center items-center p-4">
        <div className="flex justify-center items-center gap-2.5">
          <span className="text-2xl">
            <FcCalculator />
          </span>
          <h1
            className="font-semibold tracking-wide text-lg"
            style={{ color: theme.textColor }}
          >
            Weather Calculator
          </h1>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-6">
        <Calculator />
      </main>

      {/* Footer */}
      <footer
        className="text-center py-3 text-xs opacity-40"
        style={{ color: theme.textColor }}
      >
        {theme.label}
      </footer>
    </div>
  );
}

export default App;
