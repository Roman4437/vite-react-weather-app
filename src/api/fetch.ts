import axios from "axios"

import { Weather } from "../../typing"

export async function fetchWeather(lat: Number, lon: Number): Promise<Weather.DTO> {
  const req = axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=auto", {
    params: {
      latitude: lat,
      longitude: lon
    }
  })

  const res: Weather.Type = (await req).data

  return {
    current: currentDTO(res),
    daily: dailyDTO(res),
    hourly: hourlyDTO(res)
  }
}

interface CurrentProps {
  current_weather: Weather.CurrentWeather,
  daily: Weather.Daily
}

function currentDTO({ current_weather, daily }: CurrentProps): Weather.CurrentDTO {
  const { temperature, windspeed, weathercode } = current_weather
  const { temperature_2m_max, temperature_2m_min, apparent_temperature_max, apparent_temperature_min, precipitation_sum } = daily

  return {
    current_temp: Math.round(temperature),
    high_temp: Math.round(temperature_2m_max[0]),
    low_temp: Math.round(temperature_2m_min[0]),
    high_feels_like: Math.round(apparent_temperature_max[0]),
    low_feels_like: Math.round(apparent_temperature_min[0]),
    wind_speed: Math.round(windspeed),
    precipitation: Math.round(precipitation_sum[0] * 100) / 100,
    weather_code: weathercode
  }
}

interface DailyProps {
  daily: Weather.Daily
}

function dailyDTO({ daily }: DailyProps): Weather.DailyDTO[] {
  return daily.time.map((time, index) => {
    return {
      time_stamp: time * 1000,
      icon_code: daily.weathercode[index],
      high_temp: Math.round(daily.temperature_2m_max[index]),
      low_temp: Math.round(daily.temperature_2m_min[index])
    }
  })
}

interface HourlytProps {
  current_weather: Weather.CurrentWeather,
  hourly: Weather.Hourly
}

function hourlyDTO({ current_weather, hourly }: HourlytProps): Weather.HourlyDTO[] {
  return hourly.time.map((time, index) => {
    return {
      time_stamp: time * 1000,
      icon_code: hourly.weathercode[index],
      temp: Math.round(hourly.temperature_2m[index]),
      feels_like: Math.round(hourly.apparent_temperature[index]),
      wind_speed: Math.round(hourly.windspeed_10m[index]),
      precipitation: Math.round(hourly.precipitation[index] * 100) / 100
    }
  }).filter(({ time_stamp }) => time_stamp >= current_weather.time * 1000)
}
