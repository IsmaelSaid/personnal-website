import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, catchError, map, of } from 'rxjs';
import { GithubUser, GithubUserInfos } from '../modeles/github-user';
@Injectable({
  providedIn: 'root'
})
export class GithubdataService {
  constructor(private http : HttpClient) { }

/**
 * TODO
 */
getContent(user : string, repoName : string, filePath : string) : Observable <any> {
  return this.http.get(`https://api.github.com/repos/${user}/${repoName}/contents/${filePath}`) ;
}

/**
 * Create a new user from informations retrieved from the Github API.
 * @param {string} user Github username
 */
  getUser(user : string) : Observable <GithubUser>{
    return this.http.get<GithubUserInfos>(`https://api.github.com/users/${user}`).pipe(map(
      (data : GithubUserInfos) => new GithubUser(data)),
      catchError((this.handleError)))
  }

  /**
   * Error handling strategy : Return an "empty" github user when get fails.
   */
  private handleError(error : HttpErrorResponse){
    switch(error.status) {
      case 404:
        // Typo errors
        console.error(error.message);
    }
    return of(new GithubUser())
  }
}