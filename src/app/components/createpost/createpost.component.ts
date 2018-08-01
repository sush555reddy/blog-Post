import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { RouterModule, Routes }  from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
                                                                                                                                                                                                                                                                                                                                          

  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor(private postService:PostService,private router:Router) { }

  ngOnInit() {
  }
createPost(post:any)
{
  
 this.postService.createPost(post).subscribe(post=>{
this.router.navigate(['/posts']);
 }) 
  console.log(post);
}
}
