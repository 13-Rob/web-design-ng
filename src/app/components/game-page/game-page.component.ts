import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})

export class GamePageComponent implements OnInit {
  title: any;
  game: any;
  color: any;
  constructor(public gamesService: GamesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      this.title = params['title']
    );

    this.getGameInfo();
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
}
