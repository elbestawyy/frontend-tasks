import { Component } from '@angular/core';
import { PostList } from '../../components/post/post-list/post-list';

@Component({
  selector: 'app-home',
  imports: [PostList],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true,
})
export class Home {

}
