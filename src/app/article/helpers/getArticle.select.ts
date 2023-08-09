import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { article } from "../store/select";


export const getArticleSelect = () => {
  const store = inject(Store);
  return store.pipe(select(article))
}