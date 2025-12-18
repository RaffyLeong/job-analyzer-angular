import { Component, signal } from '@angular/core';
import { skillTagComponent } from './skill-tag/skillTag.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [skillTagComponent],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-analyzer-angular');
}
