import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/service/news.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, AsyncPipe], 
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'] 
})
export class NewsComponent implements OnInit {

  newsData: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (response) => {
        this.newsData = response.articles;
        console.log(response.articles);
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      }
    });
  }
}
