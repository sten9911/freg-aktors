import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../misc/dropdown/dropdown.component';
import { FunctionDetails } from '../../functions/function.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-details-faq',
  standalone: true,
  imports: [DropdownComponent, NgFor],
  templateUrl: './details-faq.component.html',
  styleUrl: './details-faq.component.scss'
})
export class DetailsFaqComponent {
  @Input()
  faq!: FunctionDetails["faq"] | undefined;
}
