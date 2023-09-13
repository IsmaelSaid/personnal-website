/**
 * This is the model we use to store data coming from github's api.
 * Since we know how informations coming from github's api looks like,
 * i decided to create a structure to store these data.
 */
export type GithubUserInfos = {
    avatar_url: string,
    bio: string,
    blog: string,
    company: string,
    created_at: string,
    email: string,
    events_url: string,
    followers: string,
    followers_url: string,
    following: string,
    following_url: string,
    gists_url: string,
    gravatar_id: string,
    hireable: string,
    html_url: string,
    id: string,
    location: string,
    login: string,
    name: string,
    node_id: string,
    organizations_url: string,
    public_gists: string,
    public_repos: string,
    received_events_url: string,
    repos_url: string,
    site_admin: string,
    starred_url: string,
    subscriptions_url: string,
    twitter_username: string,
    type: string,
    updated_at: string,
    url: string
}

export class GithubUser {
     private githubUserInfos! : GithubUserInfos | null ;
    /**
     * @param{GithubUserInfos} githubUserinfos L'ensemble des informations disponibles.
     */
    constructor (githubUserinfos? : GithubUserInfos){
        this.githubUserInfos = githubUserinfos? githubUserinfos : null ;
    }

    /*
     * This method returns users informations.
     * to handle runtimes errors we will simply use a null value (when get fails)
     */
    getInfos() : GithubUserInfos | null {
        return this.githubUserInfos? this.githubUserInfos : null ;
    }
}