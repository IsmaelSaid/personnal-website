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
