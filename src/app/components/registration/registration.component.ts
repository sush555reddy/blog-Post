import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { RouterModule, Routes }  from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
register(user:any){

  this.authService.register(user).subscribe(user=>{
    console.log(user);
    this.router.navigate(['/login']);
  })

}
}
