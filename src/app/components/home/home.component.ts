import { Component } from '@angular/core';
import { TopFunctionComponent } from './top-function/top-function.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopFunctionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
