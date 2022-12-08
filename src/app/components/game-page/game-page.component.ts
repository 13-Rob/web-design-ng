import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})

export class GamePageComponent implements OnInit {
  title: any;
  game: any;
  created: any;
  constructor(public gamesService: GamesService, public reviewsService: ReviewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      this.title = params['title']
    );

    this.getGameInfo();
    this.getReviews();

    const btn = document.getElementById('review-btn');
    const el = document.getElementById('review-editor');

    if (btn != null && el != null)
    {
      btn.addEventListener('click', function handleClick(){
        el.style.display = "block";
        btn.classList.add("disabled");
      });
    }
  }

  getGameInfo(){
    this.gamesService.getGameInfo(this.title).subscribe(
      res => {
        this.game = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  getReviews(){
    this.reviewsService.getGameReviews(this.title).subscribe(
      res => {
        this.reviewsService.review = res;
        console.log(this.reviewsService.review);
      },
      err => {
        console.log(err);
      }
    );
  }
}
