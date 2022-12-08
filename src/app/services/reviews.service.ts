import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../model/review';
import { reviews } from '../model/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  API_URL="http://localhost:3000/api/reviews";
  review: Review[] | undefined;
  constructor(private http:HttpClient) { }

  getGameReviews(Title:string){
    var URL=this.API_URL + '/title/' + Title;
    return this.http.get<Review[]>(URL)
  }

  postReview(review:reviews){
    var URL=this.API_URL;
    return this.http.post<Review[]>(URL, review)
  }
}
