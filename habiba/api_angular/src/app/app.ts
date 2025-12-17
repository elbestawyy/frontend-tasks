import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  postId: number = 0;
  deleteId: number = 0;
  newPost = {
    title: '',
    body: ''
  };
  response: string = 'No response yet...';

  constructor(private apiService: ApiService) {}

  getSinglePost() {
    this.apiService.getPost(this.postId).subscribe({
      next: (data) => {
        this.response = JSON.stringify(data, null, 2);
      },
      error: (error) => {
        this.response = `Error: ${error.message}`;
      }
    });
  }

  getAllPosts() {
    this.apiService.getAllPosts().subscribe({
      next: (data) => {
        this.response = JSON.stringify(data, null, 2);
      },
      error: (error) => {
        this.response = `Error: ${error.message}`;
      }
    });
  }

  createPost() {
    const postData = {
      title: this.newPost.title,
      body: this.newPost.body,
      userId: 1
    };

    this.apiService.createPost(postData).subscribe({
      next: (data) => {
        this.response = JSON.stringify(data, null, 2);
        this.newPost.title = '';
        this.newPost.body = '';
      },
      error: (error) => {
        this.response = `Error: ${error.message}`;
      }
    });
  }

  deletePost() {
    this.apiService.deletePost(this.deleteId).subscribe({
      next: (data) => {
        this.response = JSON.stringify(data, null, 2);
        this.deleteId = 0;
      },
      error: (error) => {
        this.response = `Error: ${error.message}`;
      }
    });
  }
}