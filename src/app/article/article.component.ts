import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArticle } from './model/article.interface';
import { getActiveSlug } from './helpers/getActiveSlug';
import { getArticleSelect } from './helpers/getArticle.select';
import { currentUserSelect } from '../shared/helpers/currentUser.select';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ArticleComponent implements OnInit {

  articles!: IArticle | null;
  isUser = false;
 
  constructor() {
    getActiveSlug();
    this.getUserAndArticle();
  }

  private getUserAndArticle() {
    combineLatest(currentUserSelect(), getArticleSelect())
      .subscribe({
        next: (data: any) => {
          this.articles = data[1]?.article;
          if (this.articles?.author?.username === data[0]?.username) {
            this.isUser = true
          }
        }
      })
  }

  ngOnInit(): void { }
}
