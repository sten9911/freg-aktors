import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-function-card',
  standalone: true,
  imports: [NgIf, NgClass, RouterModule],
  templateUrl: './function-card.component.html',
  styleUrl: './function-card.component.scss'
})
export class FunctionCardComponent {

  @Input() id = 0;
  @Input() title = '';
  @Input() description = '';
  @Input() owner = '';
  @Input() likes = 0;
  @Input() liked = false;

  like()  {
    this.liked = !this.liked;
  }
}
