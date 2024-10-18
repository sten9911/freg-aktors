import { Component, EventEmitter, Output } from '@angular/core';
import {
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleButtonComponent {

  @HostBinding('class.toggle-checked') @Input() checked = false;

  @Output() checkedChange = new EventEmitter();

  onToggleChange() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
