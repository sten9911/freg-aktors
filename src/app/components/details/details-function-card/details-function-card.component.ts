import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-function-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './details-function-card.component.html',
  styleUrl: './details-function-card.component.scss'
})
export class DetailsFunctionCardComponent {
  likes: number = 0;
  liked: boolean = false;

  like()  {
    this.liked = !this.liked;
  }
}
