import { Weather } from "../../../../typing"

import Day from "./Day"

interface Props {
  daily: Weather.DailyDTO[]
}

function DailyWeather({ daily }: Props) {
  return (
    <>
      {daily.map(day => <Day key={day.time_stamp} day={day}/>)}
    </>
  )
}

export default DailyWeather