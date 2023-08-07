import { EnvironmentInjector, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { globalStart } from "./globalStart.action";

export const getActiveRoute = ()=>{
  const activatedRoute = inject(ActivatedRoute);
  const injector = inject(EnvironmentInjector);
  activatedRoute.queryParams
    .subscribe({
      next:(res)=>{
        injector.runInContext(()=>{
          globalStart(+res['offset']);
        })
        
      }
    })
}