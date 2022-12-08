import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { reviews } from 'src/app/model/reviews';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-review-editor',
  templateUrl: './review-editor.component.html',
  styleUrls: ['./review-editor.component.css']
})
export class ReviewEditorComponent implements OnInit{
  @Input() game: any;
  title: any;
  reviews:reviews = {};

  constructor(private activatedRoute: ActivatedRoute, public reviewsService: ReviewsService) {
    this.reviews = new reviews;
  }

  ngOnInit(): void {
    const btn = document.getElementById('submit-btn');
    this.activatedRoute.params.subscribe(params =>
      this.title = params['title']
    );

    this.reviews.title = this.title;
  }

  reviewbox(form:NgForm){
    form.value.game=this.title;
    this.reviews=form.value;
    console.log(this.reviews);
    this.postReviews();
  }

  postReviews(){
    this.reviewsService.postReview(this.reviews).subscribe(
      res => {
        console.log('Review Submitted');
      },
      err => {
        console.log(err);
      }
    );
  }

}
