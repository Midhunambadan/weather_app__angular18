import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  private newsUrlApi='http://localhost:7000/'

  getNews():Observable<any>{
    return this.http.get<any>(this.newsUrlApi)
  }




}
