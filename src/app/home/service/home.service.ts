import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";


@Injectable()
export class HomeService {
  private http = inject(HttpClient);
  private isLoad = false;

  getGlobalFeed(offset: number = 0, feed = '',) {
    return this.http.get(`articles/${feed}?limit=10&offset=${offset}`)
  }

  getIsLoad(){
    return this.isLoad
  }

  setIsLoad(value:boolean){
    this.isLoad = value;
  }
}