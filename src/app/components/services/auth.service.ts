import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Subject} from 'rxjs';


// const httpOptions={
//   headers:new HttpHeaders({'Content-Type':'application/json'})
// }

@Injectable()
export class AuthService {

  status = new Subject<boolean>();
  
domain="http://localhost:8080";
authToken;
uname:string;
token:string;
options;
  constructor(private http:HttpClient,private cookieService:CookieService,private router:Router) { 
  }
  

  register(user:any){
    return this.http.post(this.domain+"/register",user)
  }
  login(user:any){
    
     this.http.post(this.domain+"/login",user).subscribe((data:any)=>{
      if(data.isLoggedIn)
      {
        console.log(data);
        this.token=data.token;
        this.uname=data.username;
        console.log(this.token);
        this.cookieService.set('token',this.token);
        this.cookieService.set('uname',this.uname);
        this.router.navigate(["/home"]);
        this.notifyNavbar(data.isLoggedIn)
      }
      else{
        this.notifyNavbar(data.isLoggedIn)
  console.log(data);
      }
    })
  }

  notifyNavbar(loggedIn:boolean){
    this.status.next(loggedIn);
  }

  loadToken(){
    return this.cookieService.get('token')
  }


  // createAuthenticationHeaders(){
  //   this.loadToken();
  //   this.options=new RequestOptions({
  //     headers:new Headers({
  //       'Content-Type':'application/json',
  //       'authorization':this.token
  //     })
  //   })
  // }


logout(){
  this.cookieService.delete('token');
  this.cookieService.delete('uname');``
  this.token=null;
  this.notifyNavbar(false);
  

}
}
