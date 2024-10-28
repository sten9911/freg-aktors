import { Component } from '@angular/core';
import { ToggleButtonComponent } from '../../misc/toggle-button/toggle-button.component';

@Component({
  selector: 'app-header-settings',
  standalone: true,
  imports: [ToggleButtonComponent],
  templateUrl: './header-settings.component.html',
  styleUrl: './header-settings.component.scss'
})
export class HeaderSettingsComponent {
  darkmodeValue: boolean = false;
}
