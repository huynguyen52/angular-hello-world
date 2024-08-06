import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  template: '',
})
export abstract class BaseButton {
  @Input() disabled = false;
  @Input() size: 'medium' | 'large' = 'medium';
  @Input() color: 'primary' | 'secondary' = 'primary';
  get styles() {
    return `${this.color} ${this.size}`;
  }
}
