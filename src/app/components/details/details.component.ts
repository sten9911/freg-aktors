import { Component } from '@angular/core';
import { SubNavComponent } from '../misc/sub-nav/sub-nav.component';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [SubNavComponent, NgIf, NgClass],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  likes: number = 0;
  liked: boolean = false;

  // Controls which tab is open
  selectedTab: 'desc' | 'tech' = 'desc';

  like()  {
    this.liked = !this.liked;
  }

}
