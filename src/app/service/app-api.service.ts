import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppApiService {
  constructor(public http: HttpClient) {}
  getUsersRecord() {
    return new Promise((resolve, reject) => {
      let urlString = "https://jsonplaceholder.typicode.com/users";
      this.http.get(urlString).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
