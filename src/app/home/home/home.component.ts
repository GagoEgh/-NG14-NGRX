import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { logedInSelector } from 'src/app/shared/helpers/logedin.select';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { isLoadSelect } from '../helpers/isLoad.select';


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
export class HomeComponent {
  logedIn$!: Observable<boolean>;
  isLoad$!: Observable<boolean>;
  constructor() {
    this.logedIn$ = logedInSelector();
    this.isLoad$ = isLoadSelect()
  }

}
