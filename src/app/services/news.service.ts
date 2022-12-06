import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_URL="http://localhost:3000/api/news";
  news: News[] | undefined;
  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get<News[]>(this.API_URL);
  }
}
