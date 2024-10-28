import { Component } from '@angular/core';
import { TopFunctionComponent } from './top-function/top-function.component';
import { HomeAboutFunctionsComponent } from './home-about-functions/home-about-functions.component';
import { HomeStatsComponent } from './home-stats/home-stats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopFunctionComponent, HomeAboutFunctionsComponent, HomeStatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
