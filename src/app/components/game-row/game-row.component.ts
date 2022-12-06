import { Component, OnInit , AfterViewInit} from '@angular/core';
import * as M from "materialize-css";
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit, AfterViewInit {

  constructor(public gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        dist:0,
        numVisible:5,
        padding: 10
      });
    }), 100;
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res => {
        this.gamesService.game = res;
        console.log(this.gamesService.game);
      },
      err => {
        console.log(err);
      }
    );
  }
}
