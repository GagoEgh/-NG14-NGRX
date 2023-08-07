import { EnvironmentInjector, inject } from "@angular/core";
import { globalStart } from "./globalStart.action";
import { getActiveRoute } from "./getActiveRoutes";
import { Store } from "@ngrx/store";
import { globalStartAction } from "../store/action";

export const getGlobalActiveRoute = () => {
  const injector = inject(EnvironmentInjector);
  const store = inject(Store);
  //return store.dispatch(globalStartAction({page:page}));

  getActiveRoute().subscribe({
    next: (res) => {
      injector.runInContext(() => {
        if (res['offset'] != undefined) {
          globalStart(+res['offset']);
        } else {
          globalStart();
        }

      })
    }
  })
}