import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URL="http://localhost:3000/api/games";
  game: Game[] | undefined;
  constructor(private http:HttpClient) { }

  getGames(){
    return this.http.get<Game[]>(this.API_URL);
  }

  getGameInfo(Title:string){
    var URL='http://localhost:3000/api/games/title/' + Title;
    return this.http.get<Game[]>(URL)
  }
}
