import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { yourFeed } from "../store/seclector";
import { Observable } from "rxjs";
import { IHomeFeed } from "../model/homeFeed.interface";

export const getYourFeedSelector = ():Observable<IHomeFeed|null>=>{
  const store = inject(Store);
 return store.pipe(select(yourFeed))
}