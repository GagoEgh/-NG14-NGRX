import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { logedInSelector } from '../shared/helpers/logedin.select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logedIn$!: Observable<boolean>;
  constructor() {
    this.logedIn$ = logedInSelector()
  }

}
