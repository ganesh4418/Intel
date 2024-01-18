import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelpAndSupport } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpAndSupportService {

  envUrl = environment.apiUrl;
  private httpClient: HttpClient;

  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  helpAndSupport(data: HelpAndSupport): Observable<any> {
    return this.httpClient.post(this.envUrl + 'helpandsupport/', data);
  }
}
