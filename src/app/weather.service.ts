import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  async getWeather() {
    let localWeather = window.sessionStorage.getItem('weather');
    if (localWeather) {
      return JSON.parse(localWeather);
    }

    const response = await fetch(
      'https://weather.tsukumijima.net/api/forecast/city/011000'
    );

    const object = await response.json();
    window.sessionStorage.setItem('weather', JSON.stringify(object));
    return object;
  }
}
