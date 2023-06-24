import { FC } from "react";
import { windDirection } from "../../utils/weather";
import WeatherCondition from "./WeatherCondition";
import { IToday } from "../../interfaces/weather";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

const Today: FC<{ data: IToday }> = ({ data }) => {
  const date = new Date(data.dt * 1000);

  return (
    <div className="bg-black-1">
      <time
        dateTime={date.toString()}
        className="flex items-center justify-between bg-black-2 p-4"
      >
        <span>{date.toLocaleString(undefined, dateOptions)}</span>
        <span>{date.toLocaleTimeString(undefined, timeOptions)}</span>
      </time>
      <div className="px-4 py-12 lg:flex lg:items-center lg:justify-center lg:flex-col lg:h-[90%]">
        <h3 className="text-4xl mb-4">{data.name}</h3>
        <p>{data.weather[0].main}</p>
        <div className="mt-8 flex items-center justify-start">
          <p className="text-7xl">
            {data.main.temp}
            <sup className="relative text-[1.8rem] -top-8 font-semibold">o</sup>
            C
          </p>
          <figure className="w-16 h-16">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="sun icon"
            />
          </figure>
        </div>
        <div className="flex items-center justify-start space-x-2 mt-4">
          <WeatherCondition icon="umbrella" value={data.main.humidity} />
          <WeatherCondition icon="wind" value={`${data.wind.speed}m/sec`} />
          <WeatherCondition
            icon="direction"
            value={windDirection(data.wind.deg)} // Comment 1
          />
        </div>
      </div>
    </div>
  );
};

export default Today;
