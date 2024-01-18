import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDemo } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private httpClient: HttpClient;
  envUrl = environment.apiUrl;

  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  requestDemo(data: RequestDemo): Observable<any> {
    return this.httpClient.post(this.envUrl + 'request-demo/', data);
  }
}
