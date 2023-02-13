import { useState } from "react"
import { Weather } from "../../../../typing"

import Hour from "./Hour"

interface Props {
  hourly: Weather.HourlyDTO[]
}

function HourlyWeather({ hourly }: Props) {
  const [limit, setLimit] = useState<number>(5)

  return (
    <>
      {hourly.slice(0, limit).map(hour => <Hour key={hour.time_stamp} hour={hour}/>)}
      <button onClick={() => setLimit(prev => prev + 5)} className="mx-auto text-xl cursor-pointer text-cyan-900/70">...</button>
    </>
  )
}

export default HourlyWeather