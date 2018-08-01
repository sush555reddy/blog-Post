import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  posts: any;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
      this.posts.reverse();
      // console.log(this.posts)
      // console.log("888888888")
      // console.log(this.posts.reverse())
    })
  }



}
