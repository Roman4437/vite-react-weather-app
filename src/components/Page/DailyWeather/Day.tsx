import { Weather } from "../../../../typing"

import { WEATHER_MAP } from "../../../helpers/map"

interface Props {
  day: Weather.DailyDTO
}

const WEEK_DAY = new Intl.DateTimeFormat("en-US", { weekday: "long" })

function Day({ day }: Props) {
  return (
    <div className="mx-auto p-3">
      <img className="h-20 w-20" src={`./icons/${WEATHER_MAP.get(day.icon_code)}.png`} alt="Icon" />
      <span className="flex justify-center">{WEEK_DAY.format(day.time_stamp)}</span>
      <span className="flex justify-center">{`${day.low_temp} / ${day.high_temp} °`}</span>
    </div>
  )
}

export default Day