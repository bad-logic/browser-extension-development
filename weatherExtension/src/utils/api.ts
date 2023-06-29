const OPEN_WEATHER_API_KEY = 'bb5ea70137e4164d996d6df49c6e0d00';

export interface IOpenWeatherData {
  name: string;
  sys: {
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
    type: number;
  };
  base: string;
  clouds: {
    all: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export async function fetchOpenWeatherData(city: string): Promise<IOpenWeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!res.ok) {
    throw new Error('City not found');
  }

  return res.json();
}
