import { Component, EnvironmentInjector, inject } from '@angular/core';
import { getActiveRoute } from '../helpers/getActiveRoutes';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IHomeFeed } from '../model/homeFeed.interface';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { getTagSelector } from '../helpers/getTag.selector';
import { tagIsLoad } from '../helpers/tagIsLoad.selector';
import { tagStartActions } from '../helpers/tagStart.action';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['../global/global.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingComponent,PaginationComponent]
})
export class TagComponent {
  tag$!: Observable<null | IHomeFeed>
  isLoad$!: Observable<boolean>;
  private injector = inject(EnvironmentInjector);
  data!:{tag:string,offset:string}
  constructor() {
    this.getActiveTag();
    this.tag$ = getTagSelector(); 
    this.isLoad$ = tagIsLoad();
  }

  
  private getActiveTag() {
    getActiveRoute().subscribe({
      next: (res) => {
        this.data = {
          offset: res['offset'],
          tag: res['tag']
        }

        this.injector.runInContext(()=>{
          tagStartActions(this.data);
        })
      }
    })
  }
}
