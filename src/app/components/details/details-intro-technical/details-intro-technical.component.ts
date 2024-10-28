import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-intro-technical',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './details-intro-technical.component.html',
  styleUrl: './details-intro-technical.component.scss'
})
export class DetailsIntroTechnicalComponent {
  // Controls which tab is open
  selectedTab: 'desc' | 'tech' = 'desc';
}
