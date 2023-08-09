import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { isTag } from "../store/seclector";
import { Observable } from "rxjs";

export const isTagSelector = ():Observable<boolean>=>{
    const store = inject(Store);
    return store.pipe(select(isTag))
}