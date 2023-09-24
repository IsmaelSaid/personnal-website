import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { b64DecodeUnicode } from '../../tools/decoder';
import { GithubUserInfos, nullGithubUser } from '../models/github-user';
import { GithubReposInfos, nullGithubRepos } from '../models/github-repos';
import { GithubContentInfos } from '../models/github-content';

@Injectable({
  providedIn: 'root',
})
export class GithubdataService {
  constructor(private http: HttpClient) {}
  /**
   * Retrieves GitHub user information for a given username.
   * @param user - The GitHub username to fetch information for.
   * @returns An Observable of GitHubUserInfos containing user information.
   */
  getUser(user: string): Observable<GithubUserInfos> {
    return this.http.get<GithubUserInfos>(`https://api.github.com/users/${user}`).pipe(
      catchError(this.handleErrorGithubUserInfos),
      map((user: GithubUserInfos) => ({
        avatar_url: user.avatar_url,
        bio: user.bio,
        blog: user.blog,
        created_at: user.created_at,
        email: user.email,
        location: user.location,
        login: user.login,
        name: user.name,
        twitter_username: user.twitter_username,
        type: user.type,
      }))
    );
  }

  /**
   * Retrieves GitHub repositories information for a given user.
   *
   * @param user - The GitHub username to fetch repositories for.
   * @returns An Observable of an array of GithubReposInfos containing repository information.
   */
  getRepos(user: string): Observable<GithubReposInfos[]> {
    return this.http
      .get<GithubReposInfos[]>(`https://api.github.com/users/${user}/repos`)
      .pipe(
        catchError(this.handleErrorGithubReposInfos),
        map((repos: GithubReposInfos[]) => {
          return repos.map((repo) => ({
            name: repo.name,
            full_name: repo.full_name,
            html_url: repo.html_url,
            language: repo.language,
          }));
        })
      );
  }
  /**
   * Retrieves the content of a file from a GitHub repository.
   *
   * @param user - The GitHub username of the repository owner.
   * @param repoName - The name of the GitHub repository.
   * @param filePath - The path to the file within the repository.
   * @returns An Observable of a string containing the decoded content of the file.
   */
  getContent(user: string, repoName: string, filePath: string): Observable<string> {
    return this.http
      .get<GithubContentInfos>(
        `https://api.github.com/repos/${user}/${repoName}/contents/${filePath}`
      )
      .pipe(
        map((data: GithubContentInfos) => {
          return b64DecodeUnicode(data.content);
        })
      );
  }

  /**
   * Handles HTTP errors when retrieving GitHub user information.
   *
   * @param error - The HttpErrorResponse object representing the error.
   * @returns An Observable of a default GithubUserInfos object or null.
   */
  private handleErrorGithubUserInfos(error: HttpErrorResponse) {
    console.error(error.message);
    return of(nullGithubUser);
  }

  /**
   * Handles HTTP errors when retrieving GitHub repositories information.
   *
   * @param error - The HttpErrorResponse object representing the error.
   * @returns An Observable of an array containing a default GithubReposInfos object or null.
   */

  private handleErrorGithubReposInfos(error: HttpErrorResponse) {
    console.error(error.message);
    return of([nullGithubRepos]);
  }
}
