import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  postId: number | null = null;
  title = '';
  body = '';

  posts: Post[] = [];
  selectedPost: Post | null = null;

  private storageKey = 'posts';
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) this.loadPosts();
  }

  // Load posts from LocalStorage
  loadPosts() {
    const data = localStorage.getItem(this.storageKey);
    this.posts = data ? JSON.parse(data) : [];
  }

  // Save posts to LocalStorage
  savePosts() {
    if (!this.isBrowser) return;
    localStorage.setItem(this.storageKey, JSON.stringify(this.posts));
  }

  // CREATE
  createPost() {
    if (!this.postId || !this.title || !this.body) {
      alert('Please enter ID, title and body');
      return;
    }

    if (this.posts.find(p => p.id === this.postId)) {
      alert('ID already exists!');
      return;
    }

    const newPost: Post = {
      id: this.postId,
      title: this.title,
      body: this.body
    };

    this.posts.push(newPost);
    this.savePosts();
    this.clearForm();
  }

  // READ
  readPost() {
    if (!this.postId) return;

    this.selectedPost = this.posts.find(p => p.id === this.postId) || null;

    if (!this.selectedPost) alert('Post not found');
  }

  // UPDATE
  updatePost() {
    if (!this.postId) return;

    const index = this.posts.findIndex(p => p.id === this.postId);
    if (index === -1) {
      alert('Post not found');
      return;
    }

    this.posts[index].title = this.title;
    this.posts[index].body = this.body;
    this.savePosts();
    this.clearForm();
  }

  // DELETE
  deletePost() {
    if (!this.postId) return;

    const index = this.posts.findIndex(p => p.id === this.postId);
    if (index === -1) {
      alert('Post not found');
      return;
    }

    this.posts.splice(index, 1);
    this.savePosts();
    this.clearForm();
  }

  clearForm() {
    this.postId = null;
    this.title = '';
    this.body = '';
    this.selectedPost = null;
  }
}
