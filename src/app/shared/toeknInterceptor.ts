import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = this.userService.userLoginData.token;
        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', `token ${userToken}`),
        });
        return next.handle(modifiedReq);
    }

    
}