import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { popularTagsStartAction } from "../store/action";

export const popularTagsAction = ()=>{
  const store = inject(Store);
  store.dispatch(popularTagsStartAction());
}