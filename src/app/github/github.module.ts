import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DisplayGithubUserComponent } from './display-github-user/display-github-user.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DisplayGithubUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports : [
    DisplayGithubUserComponent
  ]
})
export class GithubModule { }