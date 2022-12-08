import { Component, OnInit} from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit {

  constructor(public gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
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
