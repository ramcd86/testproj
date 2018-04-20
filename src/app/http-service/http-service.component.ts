
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpServiceComponent {

  private serviceUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private http: HttpClient) {
  }

  public getWeather() {
    return this.http.get(this.serviceUrl);
  }

}
