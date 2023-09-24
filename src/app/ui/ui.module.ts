import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DisplayProjectComponent } from './display-project/display-project.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [NavbarComponent, LandingPageComponent, DisplayProjectComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    NavbarComponent,
    LandingPageComponent,
    MatGridListModule,
    DisplayProjectComponent,
  ],
})
export class UiModule {}
