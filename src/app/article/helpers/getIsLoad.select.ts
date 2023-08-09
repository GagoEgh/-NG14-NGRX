import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { isLoad } from "../store/select";
import { Observable } from "rxjs";

export const getIsLoadSelect = (): Observable<boolean> => {
  const store = inject(Store);
  return store.pipe(select(isLoad))
}