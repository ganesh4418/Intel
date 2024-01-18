import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private apiUrl = 'http://123.201.192.65:8282/api/forgot-password/'; 
constructor(private http: HttpClient) {}
forgotPassword(email: any) {
  const body = { email };
  console.log(this.apiUrl)
  return this.http.post(`${this.apiUrl}/forgot-password`, body);
}
}

