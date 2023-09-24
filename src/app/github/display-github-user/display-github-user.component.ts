import { Component, OnInit, Input } from '@angular/core';
import { GithubUserInfos } from '../models/github-user';
import { GithubdataService } from '../services/github-data.service';
import { Observable, tap } from 'rxjs';
import { GithubReposInfos } from '../models/github-repos';

@Component({
  selector: 'app-display-github-user',
  templateUrl: './display-github-user.component.html',
  styleUrls: ['./display-github-user.component.css'],
})
export class DisplayGithubUserComponent implements OnInit {
  @Input() userName!: string;
  githubUserInfos$!: Observable<GithubUserInfos | null>;
  githubReposInfos$!: Observable<GithubReposInfos | null>;
  githubContentInfo$!: Observable<string> | null;

  constructor(private githubdataservice: GithubdataService) {}

  ngOnInit(): void {
    this.githubUserInfos$ = this.githubdataservice
      .getUser(this.userName)
      .pipe(tap(console.info));

    // this.githubReposInfos$ = this.githubdataservice
    // .getRepos(this.userName)
    // .pipe(tap(console.log));

    this.githubContentInfo$ = this.githubdataservice
      .getContent('IsmaelSaid', 'Demande-de-valeurs-foncieres', 'readme.md')
      .pipe(tap(console.log));
  }
}
