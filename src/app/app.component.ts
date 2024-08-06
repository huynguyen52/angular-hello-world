import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleButtonComponent } from './components/button/toggle-button/toggle-button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleButtonComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-hello-world';
  applyForm = new FormGroup({
    name: new FormControl(false),
  });

  submitForm() {
    console.log(this.applyForm.value);
  }
}
