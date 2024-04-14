import { Octokit } from '@octokit/rest';
import keys from '../keys.json'

const callIssuesWithHook = (setter) => async (page=1) => {
    const url = "https://api.github.com/repos/{owner}/{repo}/issues";
    const octokit = new Octokit({
        auth: keys.REACT_APP_GITHUB_AUTH,
    });

    let response = await octokit.request('GET '+url, {
        owner: 'angular',
        repo: 'angular-cli',
        sort: 'comments',
        page,
        headers: {
            Accept: 'application/vnd.github.html+json',
        },
    });
    setter(prevState => [...prevState, ...response.data]);
}

export default callIssuesWithHook;