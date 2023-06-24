import { forecasts } from "../../data/weather";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Other = () => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] lg:flex-grow lg:flex-shrink">
      {forecasts.map((forecast, key) => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString(undefined, dateOptions).split(", ")[0];

        return <li key={key} className="bg-black-3 even:bg-black-1 flex flex-col items-center justify-center text-center">
          <time className="bg-black-2 py-4 block w-full">{day}</time>
          <figure className="mt-8">
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt="sun icon"
            />
          </figure>
          <p className="text-4xl mb-8 mt-4">
            {forecast.main.temp}
            <sup className="relative text-[1.8rem] -top-8 font-semibold">o</sup>
            C
          </p>
        </li>
      })}
    </ul>
  )
}

export default Other
