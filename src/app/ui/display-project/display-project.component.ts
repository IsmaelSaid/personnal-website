import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-project',
  templateUrl: './display-project.component.html',
  styleUrls: ['./display-project.component.css'],
})
export class DisplayProjectComponent {
  @Input() title!: string;
  @Input() description!: string;
}
