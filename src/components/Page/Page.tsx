import { Weather } from "../../../typing"

import CurrentWeather from "./CurrentWeather/CurrentWeather"
import DailyWeather from "./DailyWeather/DailyWeather"
import Footer from "./Footer"
import HourlyWeather from "./HourlyWeather/HourlyWeather"

const LOCAL_DAY = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(Date.now())
const LOCAL_TIME = new Intl.DateTimeFormat("en-US", { timeStyle: "short"}).format(Date.now())
const LOCAL_DAY_PERIOD = new Intl.DateTimeFormat("en-US", { dayPeriod: "long" }).format(Date.now())

function Page({ current, daily, hourly }: Weather.DTO) {
  return (
    <div className="flex flex-col pt-4 justify-center w-screen md:w-[768px] text-white shadow-lg bg-page-gradient">
      <h1 className="flex text-2xl text-white/80 self-center md:self-start md:pl-8">
        {`${LOCAL_DAY} | ${LOCAL_TIME}`}
      </h1>
      <div className="grid grid-flow-row-dense md:grid-cols-2">
        <CurrentWeather current={current}/>
      </div>
      <span className="py-6 self-center text-xl text-cyan-300/70">
        {LOCAL_DAY_PERIOD.toUpperCase()}
      </span>
      <span className="py-4 mx-8 text-xl border-b">
        Daily forecast
      </span>
      <div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        <DailyWeather daily={daily}/>
      </div>
      <span className="py-4 mx-8 text-xl border-b">
        Hourly forecast
      </span>
      <HourlyWeather hourly={hourly} />
      <Footer />
    </div>
  )
}

export default Page