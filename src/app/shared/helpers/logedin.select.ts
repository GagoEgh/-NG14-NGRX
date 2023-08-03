import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { logedIn } from "src/app/auth/store/selectors"

export const logedInSelector = ()=>{
  const store = inject(Store)
  return store.pipe(select(logedIn))
}