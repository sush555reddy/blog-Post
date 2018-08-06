import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { ListpostsComponent } from './components/listposts/listposts.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {AuthService} from './components/services/auth.service';
import {PostService} from './components/services/post.service';
import { CookieService } from 'ngx-cookie-service';
import { EditpostComponent } from './components/editpost/editpost.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AuthinterceptorService } from './components/services/authinterceptor.service';
import { AuthguardService } from './components/services/authguard.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CreatepostComponent,
    ListpostsComponent,
    ViewpostComponent,
    NavigationComponent,
    EditpostComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"login",component:LoginComponent},
      {path:"register",component:RegistrationComponent},
      {path:"home",canActivate:[AuthguardService],component:HomeComponent},
      {path:"createpost",canActivate:[AuthguardService],component:CreatepostComponent},
      {path:"posts",canActivate:[AuthguardService],component:ListpostsComponent},
      {path:"posts/:id",canActivate:[AuthguardService],component:ViewpostComponent},
      {path:"posts/edit/:id",canActivate:[AuthguardService],component:EditpostComponent},
      {path:"logout",component:LoginComponent},
      {path:"",redirectTo:'/login',pathMatch:"full"},
      {path:"**",redirectTo:'/login',pathMatch:"full"},

    ])
  ],
  providers: [AuthService,PostService,CookieService,AuthguardService,AuthinterceptorService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthinterceptorService,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
