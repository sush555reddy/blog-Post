import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() postId: any;
  @Input() post:any;
  comments:any;
  lC:any
  listComm:any
  displayComments:boolean=false;
  lData:any={
    likedBy:[],
    likess:Number
  }
  constructor(private postService:PostService,private cookie:CookieService) { }
  cUname:string=this.cookie.get('uname');

  ngOnInit() {
    this.lData.likess=this.post.likedBy.length;
    console.log(this.post.likedBy.length)
    // console.log(this.post)
  }
addComm(comments,postId){
  // console.log(comments)
  // console.log(postId)
  this.postService.addComm(comments,postId).subscribe(data=>{
    this.comments="";
  })
}
listVC(postId){
  this.postService.listVC(postId).subscribe(data=>{
    this.lC=data;
    this.listComm=this.lC.postComments;
this.displayComments=!this.displayComments;
    console.log("list comments")
  })
}

likeBtn(postId,cUname){
  this.postService.likeBtn(postId,cUname).subscribe(data=>{
    this.lData=data;
    this.lData.likess=this.lData.likes
    console.log(this.lData.likess)
  })
  console.log(postId);
  console.log(cUname)
}
}
