import {Component, OnInit} from '@angular/core';
import {HttpServiceComponent} from './http-service/http-service.component';
// import {IWeatherInterface} from './interfaces/IWeatherInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private weatherData: any;

  constructor(private httpService: HttpServiceComponent) {
  }

  ngOnInit() {
    this.showWeatherData();
  }

  public showWeatherData() {
    this.httpService.getWeather().subscribe(
      (data) => {
        this.weatherData = data;
      }
    );

    console.log(this.weatherData);

  }

}
