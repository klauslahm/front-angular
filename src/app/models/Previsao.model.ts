export class Previsao {
  current: Current;
  daily: Daily[];

  constructor(
    current: Current,
    daily: Daily[]
  ) {
    this.current = current;
    this.daily = daily;
  }
}

export class Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  weather: Weather[];

  constructor(
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    weather: Weather[]
  ) {
    this.dt = dt;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.temp = temp;
    this.weather = weather;
  }
}

export class Weather {
  description: string;
  icon: string;

  constructor(description: string, icon: string) {
    this.description = description;
    this.icon = icon;
  }
}

export class Daily {
  dt: number;
  temp: Temp;
  weather: Weather[];

  constructor(dt: number, temp: Temp, weather: Weather[]) {
    this.dt = dt;
    this.temp = temp;
    this.weather = weather;
  }
}

export class Temp {
  min: number;
  max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }
}
