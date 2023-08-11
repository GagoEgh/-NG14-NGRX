import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ICurrentUser } from "../shared/model/currentUser.interface";
import { IS_PUBLIC_API } from "../main.interceptor";

@Injectable()
export class SettingsService {
  private http = inject(HttpClient);
  putCurrentUserData(user: ICurrentUser) {
    return this.http.put(`/user`, { user: user }, {
      context: new HttpContext().set(IS_PUBLIC_API, true)
    })
  }
}