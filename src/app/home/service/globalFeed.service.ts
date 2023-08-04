import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

// articles?limit=10&offset=50
@Injectable()
export class GlobalFeedService {
  private http = inject(HttpClient);

  getGlobalFeed(offset: number = 0) {
    return this.http.get(`articles?limit=10&offset=${offset}`)
  }

}