import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { isLoad } from "../../auth/store/selectors";

export const isLoadSelector = () => {
  const store = inject(Store);
  return store.pipe(select(isLoad))
}