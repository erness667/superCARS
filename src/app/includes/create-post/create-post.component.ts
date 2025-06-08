import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../services/posts.service';
import { RouterTestingHarness } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-create-post',
  standalone: false,

  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  
  post!: Post;
  selectedRating = 0;
  
  constructor(private postService: PostsService, private router: Router, private authSercice: AuthService) {
    this.InitilizePost();
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.post.rating = this.selectedRating;
  }

  getRating(): number {
    return this.selectedRating;
  }

  createPost() {
    this.postService.addPost(this.post);
    this.InitilizePost();
    console.log(this.postService.getPosts());
  }

  InitilizePost() {
    this.post = {
      title: '',
      imageFile: '',
      price: 0,
      previousOwners: 1,
      kilometrina: 0,
      letnica: '',
      rating: this.getRating(),
      username: this.authSercice.getUserInfo(),
    };
  }
}
