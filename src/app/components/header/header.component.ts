import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search='';
  //video Forms and search.mp4 min 18:19

  constructor() { }

  ngOnInit(): void {
  }

  searchbox(form:NgForm){
    console.log(form.value);
  }

}
