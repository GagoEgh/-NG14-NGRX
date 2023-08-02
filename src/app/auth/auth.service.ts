import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IRequestUser } from "./model/requestUser.interface";

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  public registerUser(requestUser: IRequestUser) {
    return this.http.post('users', requestUser)
  }
}