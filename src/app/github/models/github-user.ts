export type GithubUserInfos = {
  /** The URL of the user's avatar image. */
  avatar_url: string;

  /** The user's biography or description. */
  bio: string;

  /** The user's blog URL. */
  blog: string;

  /** The date when the user's account was created. */
  created_at: string;

  /** The user's email address. */
  email: string;

  /** The user's location. */
  location: string;

  /** The user's login or username. */
  login: string;

  /** The user's full name. */
  name: string;

  /** The user's Twitter username. */
  twitter_username: string;

  /** The type of user, e.g., 'User' or 'Organization'. */
  type: string;
};

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
};

/**
 * Represents information about a file or content within a GitHub repository.
 */
export type GithubContentInfos = {
  /** The name of the file or content. */
  name: string;

  /** The path to the file or content within the repository. */
  path: string;

  /** The size of the file in bytes. */
  size: number;

  /** The content of the file as a base64-encoded string. */
  content: string;
};

export const nullGithubRepos: GithubReposInfos = {
  name: '',
  full_name: '',
  html_url: '',
  language: '',
};

export const nullGithubUser: GithubUserInfos = {
  avatar_url: '',
  bio: '',
  blog: '',
  created_at: '',
  email: '',
  location: '',
  login: '',
  name: '',
  twitter_username: '',
  type: '',
};
