import { Weather } from "../../../../typing"

import { WEATHER_MAP } from "../../../helpers/map"

interface Props {
  current: Weather.CurrentDTO
}

function CurrentTemperature({ current }: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around items-center p-6  w-full md:w-fit">
        <img src={`./icons/${WEATHER_MAP.get(current.weather_code)}.png`} alt="Icon" />
        <span className="text-5xl">
          {`${current.current_temp} °`}
        </span>
        <span>{`${current.low_temp} / ${current.high_temp} °`}</span>
      </div>
    </div>
  )
}

export default CurrentTemperature