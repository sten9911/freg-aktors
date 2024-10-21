import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-function-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './function-card.component.html',
  styleUrl: './function-card.component.scss'
})
export class FunctionCardComponent {

  liked: boolean = false;
  like()  {
    this.liked = !this.liked;
  }
}
