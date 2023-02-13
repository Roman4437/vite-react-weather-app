import { Weather } from "../../../../typing"

import CurrentMisc from "./CurrentMisc"
import CurrentTemperature from "./CurrentTemperature"

interface Props {
  current: Weather.CurrentDTO
}

function CurrentWeather({ current }: Props) {
  return (
    <>
      <CurrentTemperature current={current} />
      <CurrentMisc current={current}/>
    </>
  )
}

export default CurrentWeather