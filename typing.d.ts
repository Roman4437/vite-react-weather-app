export declare namespace Weather {
    export interface Type {
        latitude: number;
        longitude: number;
        generationtime_ms: number;
        utc_offset_seconds: number;
        timezone: string;
        timezone_abbreviation: string;
        elevation: number;
        current_weather: CurrentWeather;
        hourly_units: HourlyUnits;
        hourly: Hourly;
        daily_units: DailyUnits;
        daily: Daily;
    }

    export interface CurrentWeather {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        time: number;
    }

    export interface HourlyUnits {
        time: string;
        temperature_2m: string;
        apparent_temperature: string;
        precipitation: string;
        weathercode: string;
        windspeed_10m: string;
    }

    export interface Hourly {
        time: number[];
        temperature_2m: number[];
        apparent_temperature: number[];
        precipitation: number[];
        weathercode: number[];
        windspeed_10m: number[];
    }

    export interface DailyUnits {
        time: string;
        weathercode: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        apparent_temperature_max: string;
        apparent_temperature_min: string;
        precipitation_sum: string;
    }

    export interface Daily {
        time: number[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        apparent_temperature_max: number[];
        apparent_temperature_min: number[];
        precipitation_sum: number[];
    }

    export interface DTO {
        current: CurrentDTO;
        daily: DailyDTO[];
        hourly: HourlyDTO[];
    }

    export interface CurrentDTO {
        current_temp: number;
        high_temp: number;
        low_temp: number;
        high_feels_like: number;
        low_feels_like: number;
        wind_speed: number;
        precipitation: number;
        weather_code: number;
    }

    export interface DailyDTO {
        time_stamp: number;
        icon_code: number;
        high_temp: number;
        low_temp: number;
    }

    export interface HourlyDTO {
        time_stamp: number;
        icon_code: number;
        temp: number;
        feels_like: number;
        wind_speed: number;
        precipitation: number;
    }
}

