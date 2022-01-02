import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  url = "https://jsonplaceholder.typicode.com/posts";
  constructor(public http: HttpClient) {}

  getJsonData() {
    return this.http.get<any>(this.url);
  }
}
