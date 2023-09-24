/**
 * Angular component for the landing page.
 *
 * This component represents the landing page of the application and is responsible for
 * displaying user information, such as their name and bio. It receives this information
 * as input properties and renders it on the landing page.
 *
 * Example usage in a template:
 *
 * ```
 * <app-landing-page
 *   [nom]="'John Doe'"
 *   [bio]="'Software Developer'"
 * ></app-landing-page>
 * ```
 *
 * @param nom The name or title to be displayed on the landing page.
 * @param bio A short biography or description of the user or the application's purpose.
 */

import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  @Input() nom!: string;
  @Input() bio!: string;
}
