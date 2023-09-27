/**
 * Represents information about a GitHub repository.
 */
export type GithubReposInfos = {
  /** The name of the repository. */
  name: string;

  /** The full name of the repository (including the user/organization name). */
  full_name: string;

  /** The URL to the repository on GitHub. */
  html_url: string;

  /** The primary programming language used in the repository. */
  language: string;

  /**A description of the repository */
  description: string;

  homepage: string;

  topics: string[];
};

export const nullGithubRepos: GithubReposInfos = {
  name: '',
  full_name: '',
  html_url: '',
  language: '',
  description: '',
  homepage: '',
  topics: [''],
};

export type configImportedRepos = {
  [key: string]: string;
};
