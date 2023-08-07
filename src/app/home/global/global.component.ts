import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IHomeFeed } from '../model/homeFeed.interface';
import { CommonModule } from '@angular/common';
import { globalFeedSelect } from '../helpers/globalFeed.select';
import { PaginationComponent } from '../pagination/pagination.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { isLoadSelect } from '../helpers/isLoad.select';
import { HomeService } from '../service/home.service';
import { getActiveRoute } from '../helpers/getActiveRoute';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  imports: [CommonModule, PaginationComponent, LoadingComponent],
  standalone: true,
})
export class GlobalComponent implements OnInit {

  globalFeeds$!: Observable<IHomeFeed | null>;
  private homeService = inject(HomeService);
  private injector = inject(EnvironmentInjector);
  constructor() {
   
    getActiveRoute();
    this.globalFeeds$ = globalFeedSelect();
  }

  ngOnInit(): void {
    this.injector.runInContext(() => {
      isLoadSelect().subscribe({
        next: (res) => {
          this.homeService.setIsLoad(res)
        }
      })
    })

  }

}
