import { useEffect, useState } from "react"

import { fetchWeather } from "./api/fetch"

import { Weather } from "../typing"

import Page from "./components/Page/Page"
import Loading from "./components/Loading/Loading"

function App() {
  const [weather, setWeather] = useState<Weather.DTO>()

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => 
        fetch(position.coords.latitude, position.coords.longitude))
  }, [])

  async function fetch(lat: Number, lon: Number): Promise<void> {
    try {
      const res = await fetchWeather(lat, lon)

      setWeather(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex justify-center">
      {weather ? <Page {...weather} /> : <Loading />}
    </main>
  )
}

export default App
