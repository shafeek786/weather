import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  weatherSearchForm!:FormGroup
  public weatherData: any;

  city !: string ;
  name : string = "City"
  temp : string = '0'
  desc : string = "description"
  title : string = "Condition"
  bg : string = "default"

  constructor(private api:ApiService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    })
  }
 

  getWeather() {
    this.api.getWeather(this.city).subscribe((data:any) => {
      console.log(data.name)
      this.name = `${data.name}, ${data.sys.country}`;
      this.temp = `${Math.round(data.main.temp)}`
      this.desc = data.weather[0].description
      this.title = data.weather[0].main
      
    });
  }


}
