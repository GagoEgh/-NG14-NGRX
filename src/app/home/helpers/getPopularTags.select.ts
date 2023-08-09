import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { popularTags } from "../store/seclector"

export const getPopularTags = ()=>{
  const store = inject(Store)
  return store.pipe(select(popularTags))
}