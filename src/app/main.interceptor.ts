import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  url = 'https://api.realworld.io/api/';
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneURL = `${this.url}${request.url}`
    const cloneRequest = request.clone({
      url: cloneURL
    })

    return next.handle(cloneRequest);
  }
}
