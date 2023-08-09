import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { isLoad } from "../store/seclector";

export const tagIsLoad = ()=>{
  const store = inject(Store);
  return store.pipe(select(isLoad))
}