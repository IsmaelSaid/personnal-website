import { Component, OnInit } from '@angular/core';
import { GithubUserInfos } from './github/models/github-user';
import { Observable } from 'rxjs';
import { GithubdataService } from './github/services/github-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private githubdataservice: GithubdataService) {}
  title = 'site-perso';
  githubUser$!: Observable<GithubUserInfos>;
  ngOnInit(): void {
    this.githubUser$ = this.githubdataservice.getUser('IsmaelSaid');
  }
}
