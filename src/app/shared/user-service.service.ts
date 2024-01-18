import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUserDetail, UserLoginRequest } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient;
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userLoginData: LoginUserDetail = {} as LoginUserDetail;
  researchMenuInvoked$ = new BehaviorSubject<boolean>(false);
  isUserProfileClicked: boolean = false;
  // currentNavigations

  // private url: string = 'http://123.201.192.65:8282/api/login/';
  envUrl = environment.apiUrl;

  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  checkUserLogin(user: UserLoginRequest): Observable<LoginUserDetail> {
    return this.httpClient.post<LoginUserDetail>(this.envUrl + 'login/', user);
  }

  forgotPassword(user: any): Observable<any> {
    return this.httpClient.post(this.envUrl + 'forgot-password/', user);
  }

  userLogout(userEmail: string) {
    return this.httpClient.post<LoginUserDetail>(this.envUrl + 'logout/', userEmail);

  }
}
