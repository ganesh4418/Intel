import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  // private url = 'http://123.201.192.65:8282/api/contact-us/';
  envUrl = environment.apiUrl;
  private httpClient: HttpClient;


  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }
  contactUs(data: ContactUs): Observable<any> {
    return this.httpClient.post(this.envUrl + 'contact-us/', data);
  }
}
