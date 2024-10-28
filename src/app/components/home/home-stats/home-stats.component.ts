import { Component } from '@angular/core';
import { TopFunctionComponent } from '../top-function/top-function.component';

@Component({
  selector: 'app-home-stats',
  standalone: true,
  imports: [TopFunctionComponent],
  templateUrl: './home-stats.component.html',
  styleUrl: './home-stats.component.scss'
})
export class HomeStatsComponent {

}
