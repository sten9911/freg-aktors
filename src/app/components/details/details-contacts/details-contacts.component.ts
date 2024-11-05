import { Component, Input } from '@angular/core';
import { FunctionDetails } from '../../functions/function.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-details-contacts',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './details-contacts.component.html',
  styleUrl: './details-contacts.component.scss'
})
export class DetailsContactsComponent {
  @Input()
  links!: FunctionDetails['importantLinks'] | undefined;
}
