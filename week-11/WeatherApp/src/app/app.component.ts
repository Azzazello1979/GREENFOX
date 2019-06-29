import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  inputCity: string;
  response: any;
  city: string;
  temperature: number;
  country: string;
  icon: string;
  pictureLink: string;
  
  

  constructor(private http: HttpClient){}

  getInfo(){
    
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.inputCity}&APPID=f47cab417799f580e9eb60e2949c319f`)
    .subscribe((valasz) => {
      this.response = valasz;
      console.log(valasz);
      this.city = this.response.name;
      this.temperature = Math.round(this.response.main.temp -272);
      this.country = this.response.sys.country;
      this.icon = this.response.weather[0].icon;
      this.pictureLink = `http://openweathermap.org/img/w/${this.icon}.png`;
      


      
      
      
    });
  }



}
