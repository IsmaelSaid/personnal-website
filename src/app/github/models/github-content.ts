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
