import Navbar from "./components/Navbar";
import Forecasts from "./components/forecasts/Index";

const App = () => {
  return (
    <div className="px-4 py-3 min-h-screen bg-gray-200">
      <Navbar />
      <main className="mt-8 max-w-5xl mx-auto">
        <Forecasts />
      </main>
    </div>
  );
}

export default App
