import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { globalStartAction } from "../store/action";

export const globalStart = (page:number=0)=>{
  const store = inject(Store);
  return store.dispatch(globalStartAction({page:page}));
}