import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHomeFeed } from '../model/homeFeed.interface';
import { CommonModule } from '@angular/common';
import { globalStart } from '../helpers/globalStart.action';
import { globalFeedSelect } from '../helpers/globalFeed.select';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  imports: [CommonModule,PaginationComponent],
  standalone: true,
})
export class GlobalComponent implements OnInit {

  globalFeeds$!: Observable<IHomeFeed | null>;
  
  constructor(){
    globalStart();
    this.globalFeeds$ = globalFeedSelect();
  }

  ngOnInit(): void {}

}
