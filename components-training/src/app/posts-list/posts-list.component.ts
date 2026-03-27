import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  _id: string;
  username: string;
}

interface Theme {
  _id: string;
  name: string;
}

interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  posts: Post[] = [];
}
