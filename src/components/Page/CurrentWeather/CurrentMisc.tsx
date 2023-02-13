import { Weather } from "../../../../typing"

import Row from "./Row"

interface Props {
  current: Weather.CurrentDTO
}

function CurrentMisc({ current }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex md:flex-col justify-around md:items-start w-full md:w-fit">
        <Row path="./icons/temperature.svg" string={`Feels like: ${current.low_feels_like} / ${current.high_feels_like}`}/>
        <Row path="./icons/tear.svg" string={`Precipitation: ${current.precipitation} mm`}/>
        <Row path="./icons/wind.svg" string={`Wind: ${current.wind_speed} km/h`}/>
      </div>
    </div>
  )
}

export default CurrentMisc