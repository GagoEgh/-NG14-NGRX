import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { logedInSelector } from 'src/app/shared/helpers/logedin.select';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { HomeService } from '../service/home.service';
import { isLoadSelect } from '../helpers/isLoad.select';
import { popularTagsAction } from '../helpers/popularTags.action';
import { getPopularTags } from '../helpers/getPopularTags.select';
import { isTagSelector } from '../helpers/getIsTag.selector';
import { getActiveRoute } from '../helpers/getActiveRoutes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoadingComponent,
  ]
})
export class HomeComponent implements AfterViewChecked, OnInit {
  private changeDetector = inject(ChangeDetectorRef);
  private homeService = inject(HomeService);
  logedIn$!: Observable<boolean>;
  isLoad = false;
  tags$!: Observable<string[] | null>;
  isTag$!: Observable<boolean>;
  activeTag!: string;

  constructor() {
    this.logedIn$ = logedInSelector();
    // get isLoad from home state
    this.getIsLoadSelect();
    // dispatch popular tags
    popularTagsAction();
    // get popular tag from home state
    this.tags$ = getPopularTags();
    this.isTag$ = isTagSelector();
    this.getActiveTag()
  }

  ngOnInit(): void { }

  private getActiveTag(){
    getActiveRoute().subscribe({
      next: (res:Params) => {
       this.activeTag = res['tag']
      }
    })
  }

  private getIsLoadSelect() {
    isLoadSelect().subscribe({
      next: (res) => {
        this.isLoad = res
      }
    })
  }

  ngAfterViewChecked(): void {
    // update isLoad value
    const isLoad = this.homeService.getIsLoad();
    if (this.isLoad != isLoad) {
      this.isLoad = isLoad;
    }
    this.changeDetector.detectChanges();
  }

}
