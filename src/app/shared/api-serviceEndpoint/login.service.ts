import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://123.201.192.65:8282/api/login/';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    console.log(this.url)
    let data = {
      "username": "vamsikrishna@gmail.com",
      "password": "Vamsikrishn@123"
    }
    return this.httpClient.post(this.url, data);


  }
}
