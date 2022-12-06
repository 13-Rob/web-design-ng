import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-col',
  templateUrl: './news-col.component.html',
  styleUrls: ['./news-col.component.css']
})
export class NewsColComponent implements OnInit {

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe(
      res => {
        this.newsService.news = res;
        console.log(this.newsService.news);
      },
      err => {
        console.log(err);
      }
    );
  }
}
