import { AfterViewInit, Component } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'web-design-ng';

  ngAfterViewInit(): void {
    setTimeout(() => {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        dist:0,
        numVisible:5,
        padding: 10
      });
    }), 10;

    M.updateTextFields();
  }

}
