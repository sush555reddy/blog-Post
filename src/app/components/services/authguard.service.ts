import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate():boolean{
    if(this.authService.loadToken()){
      return true
    }
    else{
      alert("invalid credentials!!");
      this.router.navigate(['/login']);
      return false
    }
  }

}
