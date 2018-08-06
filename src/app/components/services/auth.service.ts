import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Subject} from 'rxjs';
=======
>>>>>>> 3b508d7150994597fdf97cf9e546835667d968ed


// const httpOptions={
//   headers:new HttpHeaders({'Content-Type':'application/json'})
// }

@Injectable()
export class AuthService {
<<<<<<< HEAD

  status = new Subject<boolean>();
=======
>>>>>>> 3b508d7150994597fdf97cf9e546835667d968ed
  
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
<<<<<<< HEAD
        this.notifyNavbar(data.isLoggedIn)
      }
      else{
        this.notifyNavbar(data.isLoggedIn)
=======
      }
      else{
>>>>>>> 3b508d7150994597fdf97cf9e546835667d968ed
  console.log(data);
      }
    })
  }

<<<<<<< HEAD
  notifyNavbar(loggedIn:boolean){
    this.status.next(loggedIn);
  }

  loadToken(){
    return this.cookieService.get('token')
=======

  loadToken(){
return this.cookieService.get('token')
>>>>>>> 3b508d7150994597fdf97cf9e546835667d968ed
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
<<<<<<< HEAD
  this.cookieService.delete('token');
  this.cookieService.delete('uname');``
  this.token=null;
  this.notifyNavbar(false);
=======
  console.log("hello")
  this.cookieService.delete('token');
  this.cookieService.delete('uname');``
  this.token=null;
>>>>>>> 3b508d7150994597fdf97cf9e546835667d968ed
  

}
}
