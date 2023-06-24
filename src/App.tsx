import { useState } from "react";
import Navbar from "./components/Navbar";
import Forecasts from "./components/forecasts/Index";
import { IFetchWeather } from "./interfaces/weather";

const defaultWeather: IFetchWeather = {
  loading: false,
  data: null,
  error: null,
};

const App = () => {
  const [forecasts, setForecasts] = useState<IFetchWeather>(defaultWeather);

  // Comment 1
  const handleSetForecasts = (forecasts: Partial<IFetchWeather>) => {
    setForecasts((prev) => ({ ...prev, ...forecasts }));
  }

  return (
    <div className="px-4 py-3 min-h-screen bg-gray-200">
      <Navbar handleSetForecasts={handleSetForecasts} />
      <main className="mt-8 max-w-5xl mx-auto">
        <Forecasts {...forecasts} />
      </main>
    </div>
  );
}

export default App
