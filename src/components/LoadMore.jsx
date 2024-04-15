import { useEffect, useContext } from "react";
import Store from "../store/store";
import callIssuesWithHook from "../network/callIssues";

function LoadMore() {
    const { setIssues } = useContext(Store);
    const callIssues = callIssuesWithHook(setIssues);

    useEffect(() => {
        let page = 1;
        const handleScroll = async () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const threshold = 10;

            if (scrollHeight - scrollTop <= clientHeight + threshold) {
                page++;
                callIssues(page);
            }
        };

        callIssues();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return null;
}

export default LoadMore;
