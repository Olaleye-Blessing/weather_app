import { FC } from "react";
import Umbrella from "../icons/Umbrella";
import Wind from "../icons/Wind";
import Direction from "../icons/Direction";

const Icons = {
  "umbrella": <Umbrella />,
  "wind": <Wind />,
  "direction": <Direction />
}

interface Props {
  value: string | number;
  icon: keyof typeof Icons;
}

const WeatherCondition: FC<Props> = ({ value, icon }) => {
  return (
    <div className="flex items-center justify-start">
      <figure className="w-5 h-5 mr-2">
        {Icons[icon]}
      </figure>
      <p className="font-semibold">{value}</p>
    </div>
  )
}

export default WeatherCondition
