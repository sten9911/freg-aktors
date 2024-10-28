import { Component, EventEmitter, Output } from '@angular/core';
import { ToggleButtonComponent } from '../../misc/toggle-button/toggle-button.component';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [ToggleButtonComponent],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  darkmodeValue = false;

  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }
}
