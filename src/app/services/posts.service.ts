import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  array: Post[] = [];

  constructor() { }

  getPosts(): Post[] {
    const existingPostsJson = localStorage.getItem('posts');
    if (existingPostsJson) {
      this.array = JSON.parse(existingPostsJson); // Load posts into the local array
      return this.array;
    }
    return [];
  }

  addPost(post: Post): void {
    const existingPostsJson = localStorage.getItem('posts');
    let postsArray: Post[] = [];
    if (existingPostsJson) {
      postsArray = JSON.parse(existingPostsJson);
    }
    postsArray.push(post);
    localStorage.setItem('posts', JSON.stringify(postsArray));
    this.array = postsArray; 
  }
  
  removePost(index: number): void {
    const existingPostsJson = localStorage.getItem('posts');
    let postsArray: Post[] = [];
    if (existingPostsJson) {
      postsArray = JSON.parse(existingPostsJson);
    }
    postsArray.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(postsArray));
    this.array = postsArray;
  }
}
