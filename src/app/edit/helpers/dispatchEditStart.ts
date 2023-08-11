import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { editActionStart } from "../store/action";
import { EditDTO } from "../model/editDTO";

export const dispatchEditStart = (editDTO:EditDTO)=>{
  const store = inject(Store);
  store.dispatch(editActionStart(editDTO));
}