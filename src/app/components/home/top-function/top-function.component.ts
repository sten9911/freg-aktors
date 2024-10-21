import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-function',
  standalone: true,
  imports: [],
  templateUrl: './top-function.component.html',
  styleUrl: './top-function.component.scss'
})
export class TopFunctionComponent {
  @Input() number = '';
  @Input() title = '';
  @Input() type = '';
}
