import { EnvironmentInjector, inject } from "@angular/core";
import { globalStart } from "./globalStart.action";
import { getActiveRoute } from "./getActiveRoutes";

export const getGlobalActiveRoute = () => {
  const injector = inject(EnvironmentInjector);
 
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