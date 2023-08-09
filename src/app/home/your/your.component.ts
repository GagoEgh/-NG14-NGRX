import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IHomeFeed } from '../model/homeFeed.interface';
import { getYourActiveRoute } from '../helpers/getYourActiveRoute';
import { getYourFeedSelector } from '../helpers/getYourFeed.selector';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-your',
  templateUrl: './your.component.html',
  styleUrls: ['../global/global.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PaginationComponent,
    RouterModule,]
})
export class YourComponent {
  yourFeed$!: Observable<null | IHomeFeed>;
  constructor() {
    getYourActiveRoute();
    this.yourFeed$ = getYourFeedSelector()
  }

}
