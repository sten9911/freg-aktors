import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() title: string = '';
  contentOpen: boolean = false;

  toggle() {  
    this.contentOpen = !this.contentOpen;
  }
}
