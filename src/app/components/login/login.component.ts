import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
// import { RouterModule, Routes }  from '@angular/router';
// import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginDetails:any={};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
login(user:any){
 
  this.authService.login(user)
  console.log(user);

}
}
