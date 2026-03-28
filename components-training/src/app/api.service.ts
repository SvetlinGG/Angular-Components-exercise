import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/Post';
import { Theme } from './types/theme';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor( private http: HttpClient) { }

  getPosts(limit?: number){
    let url = `/api/posts`;
    if (limit){
      url += `?limit=${limit}`
    }
    return this.http.get<Post[]>(url)
  }

  getThemes(){
    return this.http.get<Theme[]>(`/api/themes`)
  }
  
}
