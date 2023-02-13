import { Weather } from "../../../../typing"

import { WEATHER_MAP } from "../../../helpers/map"

import Row from "./Row"

interface Props {
  hour: Weather.HourlyDTO
}

function Hour({ hour }: Props) {
  return (
    <div className="flex justify-around">
      <img src={`./icons/${WEATHER_MAP.get(hour.icon_code)}.png`} alt="Icon" />
      <div className="flex flex-col justify-center">
        <label>{new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(hour.time_stamp)}</label>
        <label>{new Intl.DateTimeFormat("en-US", { hour: "numeric" }).format(hour.time_stamp)}</label>
      </div>
      <Row string="Temp." measure={`${hour.temp} °`}/>
      <Row string="FL Temp." measure={`${hour.feels_like} °`}/>
      <Row string="Wind" measure={`${hour.wind_speed} km/h`}/>
      <Row string="Precip." measure={`${hour.precipitation} mm`}/>
    </div>
  )
}

export default Hour