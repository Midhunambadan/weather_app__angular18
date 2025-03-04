import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule
            
  ],
  // providers: [HttpClient],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient){}

  
  ngOnInit(): void {
  }


  weatherData:any
  errorMessage: string = ''

  fetchWeather(city: string) {
    const apiKey = `7b3be30472bd0f9eead2edb077628eb5`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    this.http.get(apiUrl).subscribe(
      (res: any) => {
        this.weatherData = res;
        console.log(res);
      },
      (error) => {
        console.error('Error fetching weather:', error);
        this.errorMessage = 'City not found. Please enter a valid city name.';
      }
    );
  }
  
  

}
