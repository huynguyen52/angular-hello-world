import { Component, forwardRef, Input } from '@angular/core';
import { BaseButton } from '../../base-button.abstract';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ToggleButtonComponent),
    },
  ],
})
export class ToggleButtonComponent
  extends BaseButton
  implements ControlValueAccessor
{
  @Input() checked: boolean = false;
  @Input() label: string = 'Toggle';

  onChange: any = () => {};
  onTouched: any = () => {};

  toggle() {
    this.checked = !this.checked;
    this.onChange(this.checked);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
