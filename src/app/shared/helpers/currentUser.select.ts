import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { Observable, map } from "rxjs"
import { ICurrentUser } from "../model/currentUser.interface"
import { currentUser } from "src/app/auth/store/selectors"

export const currentUserSelect = (): Observable<ICurrentUser | null> => {
  const store = inject(Store)
  return store.pipe(select(currentUser))
    .pipe(map((res: ICurrentUser | null) => res))

}