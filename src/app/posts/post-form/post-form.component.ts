import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output() doPostCreate = new EventEmitter<Post>();
  constructor() {
    // this.post = new Post('','');
  }

  ngOnInit() {
  }

  createPost(question: string, answer: string) {
    // console.log('in createPost');
    this.doPostCreate.emit(new Post(question, answer));
  }

}
