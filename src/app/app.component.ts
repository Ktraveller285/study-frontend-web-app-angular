import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weather!: any;
  constructor(public weatherService: WeatherService) {}

  async ngOnInit() {
    this.weather = await this.weatherService.getWeather();
  }
}
