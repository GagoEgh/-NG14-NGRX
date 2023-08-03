import { Component} from '@angular/core';
import { Observable } from 'rxjs';

import { logedInSelector } from '../shared/helpers/logedin.select';
import { isLoadSelector } from '../shared/helpers/isLoad.selector';
import { ICurrentUser } from '../shared/model/currentUser.interface';
import { currentUserSelect } from '../shared/helpers/currentUser.select';
import { currentUserDispatch } from '../shared/helpers/currentUserStart.dispatch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoad$!: Observable<boolean>;
  logedIn$!: Observable<boolean>;
  courrentUser$!: Observable<ICurrentUser | null>;

  constructor() {
    currentUserDispatch();
    this.logedIn$ = logedInSelector();
    this.isLoad$ = isLoadSelector();
    this.courrentUser$ = currentUserSelect()
  }

}
