import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PostService } from '../../../service/postService';
import { FluidModule } from 'primeng/fluid';


@Component({
  selector: 'app-post-list',
  imports: [CardModule, ButtonModule , FluidModule ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  standalone:true
})
export class PostList {
 posts?:{id:number , title:String , body:String}[] ;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.retrievePosts();
  }

  retrievePosts(): void {
    this.postService.getAll()
      .subscribe({
        next: (data) => {
          this.posts = data;
          console.log(this.posts);
        },
        error: (e) => console.error(e)
      });
  }

  deletePost(id: number): void {
   this.posts = this.posts?.filter(post => post.id !== id);
  }
}
