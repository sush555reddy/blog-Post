import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  domain="http://localhost:8080";
  postInfo:any;
  id:any;
  pData:any={
    title:String,
    description:String

  }
  post:any={
    title:String,
    description:String
  };

  currentUrl;
  constructor(private http:HttpClient,private router:Router,private _route:ActivatedRoute,private postService:PostService) { }

  ngOnInit() {
    this.currentUrl=this._route.snapshot.params;
    this.postService.editData(this.currentUrl.id).subscribe(data=>{
      this.pData=data,
      this.post.title=this.pData.postTitle,
      this.post.description=this.pData.postDescription
      this.id=this.pData._id
      
    })
   
  }
  updatePost(post,id){
      this.postService.updatePost(post,id).subscribe(data=>{
        this.router.navigate(['/posts',id]) 
      })

  }
 

}
