import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getActiveSlug } from './helpers/getActiveSlug';
import { getArticleSelect } from './helpers/getArticle.select';
import { currentUserSelect } from '../shared/helpers/currentUser.select';
import { Observable, combineLatest } from 'rxjs';
import { getIsLoadSelect } from './helpers/getIsLoad.select';
import { LoadingComponent } from '../shared/loading/loading.component';
import { IFeed } from '../home/model/globalFeed.interface';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
  imports: [CommonModule,LoadingComponent]
})
export class ArticleComponent implements OnInit {

  articles!: IFeed | null;
  isUser = false;
  isLoad$!:Observable<boolean>;
 
  constructor() {
    getActiveSlug();
    this.getUserAndArticle();
    this.isLoad$ = getIsLoadSelect()
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
