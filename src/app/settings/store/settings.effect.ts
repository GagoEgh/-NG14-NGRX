import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SettingsService } from "../settings.service";
import { settingsActionError, settingsActionStart, settingsActionSucces } from "./setting.action";
import { catchError, map, of, switchMap } from "rxjs";
import { ICurrentUser } from "src/app/shared/model/currentUser.interface";

@Injectable()
export class SettingsEffect {
  private actions = inject(Actions);
  private settingsService = inject(SettingsService);

  settingsEffect = createEffect(() => this.actions.pipe(
    ofType(settingsActionStart),
    switchMap((updateData: ICurrentUser) => {
     console.log('updateData',updateData)
      return this.settingsService.putCurrentUserData(updateData)
        .pipe(
          map((response: any) => {
            console.log('update user',response)
            return settingsActionSucces(response)
          }),
          catchError(()=>of(settingsActionError()))
          )
    })
  ))
}