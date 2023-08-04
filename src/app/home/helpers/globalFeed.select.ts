import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { globalFeed } from "../store/seclector"
import { Observable } from "rxjs"
import { IHomeFeed } from "../model/homeFeed.interface"

export const globalFeedSelect = ():Observable<IHomeFeed|null>=>{
  const store = inject(Store)
  return store.pipe(select(globalFeed))
}