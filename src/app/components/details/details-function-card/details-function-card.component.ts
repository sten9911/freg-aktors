import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Function } from '../../functions/function.model';

@Component({
  selector: 'app-details-function-card',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './details-function-card.component.html',
  styleUrl: './details-function-card.component.scss'
})
export class DetailsFunctionCardComponent {
  likes: number = 0;
  liked: boolean = false;

  @Input() function: Function | undefined = undefined;
  @Input() tags: string[] | undefined = [];

  like()  {
    if (this.function) {
      this.function.liked = !this.function.liked;
    }
  }
}
