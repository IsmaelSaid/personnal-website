import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [NavbarComponent, LandingPageComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatGridListModule],
  exports: [NavbarComponent, LandingPageComponent, MatGridListModule],
})
export class UiModule {}
