import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit {
ngOnInit() {
  $(document).ready(() => {
    console.log('jQuery is working!');
  });
}
}
