import { Component } from '@angular/core';
import { HeaderSettingsComponent } from './header-settings/header-settings.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSettingsComponent, HeaderMainComponent, HeaderNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
