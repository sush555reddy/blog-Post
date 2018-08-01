import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
checkUser:any;
  constructor(private authService:AuthService, private cookieService:CookieService) { }
  ngOnInit() {
    this.checkUser=this.cookieService.get('token')
  }
  logout(){
    this.authService.logout();
  }
  
  
}

