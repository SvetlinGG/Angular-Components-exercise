import { Component, OnInit } from '@angular/core';
import { Post } from '../types/Post';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  //isLoading = true;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getPosts(4).subscribe((posts) => {
      this.posts = posts;
      //this.isLoading = false;
    })
  }
}
