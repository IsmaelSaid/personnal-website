import { Component, OnInit } from '@angular/core';
import { GithubUserInfos } from './github/models/github-user';
import { Observable } from 'rxjs';
import { GithubdataService } from './github/services/github-data.service';
import { GithubReposInfos, configImportedRepos } from './github/models/github-repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private githubdataservice: GithubdataService) {}
  title = 'site-perso';
  githubUser$!: Observable<GithubUserInfos>;
  githubRepos$!: Observable<GithubReposInfos[]>;
  ngOnInit(): void {
    this.githubUser$ = this.githubdataservice.getUser('IsmaelSaid');

    let config: configImportedRepos = {
      'Demande-de-valeurs-foncieres': 'pseudo-description',
      'ODS-Scrapper': 'pseudo-description',
      'lazy-times-series-analysis': 'test',
    };
    this.githubRepos$ = this.githubdataservice.getRepos('IsmaelSaid', config);
  }
}
