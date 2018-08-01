import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable()
export class PostService {
  updatedPost: any;
  commentData: any
  domain = "http://localhost:8080";

  constructor(private authService: AuthService, private http: HttpClient, private cookie: CookieService, private route: ActivatedRoute) { }

  getPost() {
    return this.http.get(this.domain + "/postslist", this.authService.options)

  }

  createPost(post: any) {
    return this.http.post(this.domain + "/createpost", post);
  }

  postData(id) {
    return this.http.get(this.domain + '/posts/' + id)
  }

  editData(id) {
    return this.http.get(this.domain + "/posts/edit/" + id)
  }
  updatePost(post, id) {
    return this.http.put(this.domain + "/posts/update/" + id, post)
  }
  deletePost(id) {
    return this.http.delete(this.domain + "/posts/delete/" + id)
  }
  addComment(comments, id) {
    return this.http.post(this.domain + "/comments/add/" + id, comments)
  }
  viewComments(id) {
    return this.http.get(this.domain + "/comments/view/" + id)
  }
  addComm(comments, postId) {
    return this.http.post(this.domain + "/listcomments/add/" + postId, { comments: comments, id: postId })
  }
  listVC(postId) {
    return this.http.get(this.domain + "/viewcomments/list/" + postId)
  }

  like(id,cUname){
    return this.http.post(this.domain+"/posts/likes/"+id,cUname);
  }

likeBtn(postId,cUname)
{
  return this.http.post(this.domain+"/listposts/likes/"+postId,cUname);
}
}
