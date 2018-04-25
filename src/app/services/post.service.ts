import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post.model';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  private apiUrl = 'https://lfmapi.herokuapp.com/api/angularinfo/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.apiUrl)
      .map((res) => {
        return res.data.map(post => {
          return new Post(post.question, post.answer, post._id);
        });
      });
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<any>(this.apiUrl, post)
      .map((res) => {
        return new Post(res.data.question, res.data.answer, res.data._id);
      });
  }

  deletePost(post: Post): Observable<string> {
    const url = `${this.apiUrl}/${post._id}`;

    console.log(post, url);

    return this.http.delete<any>(url)
      .map((res) => {
        return res.data;   // id of deleted post
      });
  }

}
