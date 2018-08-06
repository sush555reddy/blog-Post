import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = false;

checkUser:any;
  constructor(private authService:AuthService, private cookieService:CookieService) { }
  
  ngOnInit() {
    if(this.authService.loadToken()){
      this.loggedIn = true;
    }
    this.authService.status.subscribe(status=>{
      this.loggedIn=status
    });
  }

  logout(){
    this.authService.logout();
  }
  
  
}

