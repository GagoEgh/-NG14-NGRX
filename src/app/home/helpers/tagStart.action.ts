import { EnvironmentInjector, inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { tagStartAction } from "../store/action";

export const tagStartActions = (data: { tag: string, offset: string }) => {
  const store = inject(Store);


  store.dispatch(tagStartAction(data))


}