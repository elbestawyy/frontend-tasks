import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { About } from "../../about/about";

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterModule, About],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
