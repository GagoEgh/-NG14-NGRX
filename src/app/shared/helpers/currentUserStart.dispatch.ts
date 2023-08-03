import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { currentUserStart } from "src/app/auth/store/action";

export const currentUserDispatch = ()=>{
  const store = inject(Store);
  store.dispatch(currentUserStart());
}