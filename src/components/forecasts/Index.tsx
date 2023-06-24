import Today from "./Today";
import Other from "./Other";
import { IFetchWeather } from "../../interfaces/weather";
import { FC } from "react";

const Index: FC<IFetchWeather> = ({ data, error, loading }) => {
  if (loading) return <p>Loading...</p>;

  if (error) return <p className="font-semibold text-lg text-red-600">{error}</p>;

  if (!data) return null;

  return (
    <section className="text-white-1 lg:flex">
      <Today data={data.today} />
      <Other forecasts={data.forecasts} />
    </section>
  );
};

export default Index;
