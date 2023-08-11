import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { editIsLoad } from "../store/selector";
import { Observable } from "rxjs";

export const getEditIsLoad = ():Observable<boolean> => {
  const store = inject(Store);
  return store.pipe(select(editIsLoad))
}