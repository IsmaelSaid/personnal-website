import { Component, OnInit ,Input } from '@angular/core';
import { GithubUser, GithubUserInfos } from '../modeles/github-user';
import { GithubdataService } from '../services/github-data.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-display-github-user',
  templateUrl: './display-github-user.component.html',
  styleUrls: ['./display-github-user.component.css']
})

export class DisplayGithubUserComponent implements OnInit {
  @Input() userName!: string ;
  githubUserInfos$! : Observable <GithubUserInfos | null>

  constructor(private githubdataservice : GithubdataService){}
  

  ngOnInit(): void {
    this.githubUserInfos$ = this.githubdataservice.getUser(this.userName).pipe(
      map((githubuser : GithubUser) => (githubuser.getInfos())),
      tap(console.info)
    );

  }
}