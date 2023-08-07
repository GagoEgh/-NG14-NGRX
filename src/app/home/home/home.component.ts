import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { logedInSelector } from 'src/app/shared/helpers/logedin.select';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { HomeService } from '../service/home.service';
import { isLoadSelect } from '../helpers/isLoad.select';
import { getActiveRoute } from '../helpers/getGlobalActiveRoute';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterModule,
    LoadingComponent,
  ]
})
export class HomeComponent implements AfterViewChecked {
  private changeDetector = inject(ChangeDetectorRef);
  private homeService = inject(HomeService);
  logedIn$!: Observable<boolean>;
  isLoad = false;

  constructor() {
    getActiveRoute();
    this.logedIn$ = logedInSelector();
    this.getIsLoadSelect();
  }

  private getIsLoadSelect() {
    isLoadSelect().subscribe({
      next: (res) => {
        this.isLoad = res
      }
    })
  }

  ngAfterViewChecked(): void {
    const isLoad = this.homeService.getIsLoad();
    if (this.isLoad != isLoad) {
      this.isLoad = isLoad;
    }
    this.changeDetector.detectChanges();
  }


}
