import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";
@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        dist:0, numVisible:5, padding: 10
      });
    });
  }

}
