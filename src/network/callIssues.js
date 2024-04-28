import axios from "axios";

const callIssuesWithHook =
    (setter) =>
    async (page = 1) => {
        const owner = "angular";
        const repo = "angular-cli";
        const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

        console.log(`${page}번째 이슈 목록 불러오는 중`);

        const response = await axios.get(url, {
            headers: {
                Accept: "application/vnd.github.html+json",
            },
            params: {
                sort: "comments",
                page,
            },
        });

        setter((prevState) => [...prevState, ...response.data]);
    };

export default callIssuesWithHook;
