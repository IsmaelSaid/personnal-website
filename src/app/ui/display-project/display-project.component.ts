/**
 * Angular component for displaying project information.
 *
 * This component is responsible for rendering project details, such as the title, description,
 * and a link to the project. It receives these details as input properties and uses the
 * `IconService` to manage custom icons that can be displayed alongside the project information.
 *
 * Example usage in a template:
 *
 * ```
 * <app-display-project
 *   [title]="'My Project'"
 *   [description]="'This is a sample project.'"
 *   [link]="'https://github.com/myuser/myproject'"
 * ></app-display-project>
 * ```
 *
 * @param title The title of the project to be displayed.
 * @param description A brief description of the project.
 * @param link The link or URL to the project's page.
 */

import { Component, Input } from '@angular/core';
import { IconService } from '../services/icon.service';
@Component({
  selector: 'app-display-project',
  templateUrl: './display-project.component.html',
  styleUrls: ['./display-project.component.css'],
})
export class DisplayProjectComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() homepage!: string;
  @Input() topics!: string[];

  constructor(private iconService: IconService) {}
}
