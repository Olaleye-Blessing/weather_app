import { FC } from "react";
import { getForecasts } from "../services/weather";
import { IFetchWeather } from "../interfaces/weather";
import Histories from "./Histories"
import Search from "./Search"

interface Props {
  handleSetForecasts: (forecasts: Partial<IFetchWeather>) => void;
}

const Navbar: FC<Props> = ({ handleSetForecasts }) => {
  // Comment 1
  const fetchForecasts = async (query: string) => {
    try {
      handleSetForecasts({ loading: true, data: null, error: null });
      const data = await getForecasts(query);
      handleSetForecasts({ data });
    } catch (error: any) {
      handleSetForecasts({ error: error.message });
    } finally {
      // Commnet 2
      handleSetForecasts({ loading: false });
    }
  };

  return (
    <nav className="flex item-center justify-between">
      <div className="w-full max-w-5xl mx-auto flex item-center justify-between">
        <div>
          <a href="/" className="text-2xl font-semibold">
            Forecast
          </a>
        </div>
        <Search fetchForecasts={fetchForecasts} />
        <Histories fetchForecasts={fetchForecasts} />
      </div>
    </nav>
  )
}

export default Navbar
