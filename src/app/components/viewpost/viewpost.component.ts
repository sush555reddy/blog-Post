import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import {AuthService} from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  domain = "http://localhost:8080";
  postInfo: any;
  id: any;
  pData: any = {
    title: String,
    description: String

  }
  post: any = {
    title: String,
    description: String
  };
  lData:any={
    likedBy:[],
    nLikes:Number
  };
  
  likesss:any;
  
  pComments:any;
  postComments:any;
  comments:String
  displayComments:boolean=false;
  
  

  currentUrl;
  constructor(private cookie:CookieService,private http: HttpClient,private authService:AuthService, private router: Router, private _route: ActivatedRoute, private postService: PostService) {

  }
  cUname:string=this.cookie.get('uname');

 
  

  ngOnInit() {

    this.currentUrl = this._route.snapshot.params;
    this.id = this.currentUrl.id
    this.postService.postData(this.currentUrl.id).subscribe(data => {
      this.pData = data,
        this.post.title = this.pData.postTitle,
        this.post.description = this.pData.postDescription;
        this.lData.nLikes=this.pData.likedBy.length;
        this.likesss=this.pData.likedBy
      console.log(this.pData.likedBy.length)
      console.log(this.likesss)
      
      
    })
    
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe(data =>
      this.router.navigate(['/posts']))
  }
  addComment(comments,id){
    console.log(comments),
    console.log(id)
    this.postService.addComment(comments,id).subscribe(data=>{
      this.comments='';
      console.log("comments posted")
    }) 
  }
  viewComments(id){
    this.displayComments=!this.displayComments;
    this.postService.viewComments(id).subscribe(data=>{
      this.pComments=data;
      this.postComments=this.pComments.postComments
      console.log(this.postComments)
      console.log("hello")
      
    })

  }

like(id,cUname){
  this.postService.like(id,cUname).subscribe(data=>{
    this.lData=data;
    this.lData.nLikes=this.lData.likes;
    console.log(this.lData.likes);
    console.log(this.lData)
  })
  
}

}
