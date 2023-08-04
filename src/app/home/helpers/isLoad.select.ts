import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { isLoad } from "../store/seclector";
import { Observable, map } from "rxjs";

export const isLoadSelect = ():Observable<boolean> => {
  const store = inject(Store);
  return store.pipe(select(isLoad))
  .pipe(map((isLoad:boolean)=>isLoad))
}