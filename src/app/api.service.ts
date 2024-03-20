import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  myApiKey: string = '71e605a27d3242da4df745470e66b8c8';
  WEATHER_API_URL:string = "https://api.openweathermap.org/data/2.5/weather"
  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
      `${this.WEATHER_API_URL}?q=${location}&appid=${this.myApiKey}&units=metric`
    )
  }
}
