import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHeaders} from '@angular/common/http';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthinterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService) { }
  intercept(req,next){
    var authRequest=req.clone({
      headers:new HttpHeaders().set("authorization",this.authService.loadToken())
    });
    return next.handle(authRequest);
  }

}
