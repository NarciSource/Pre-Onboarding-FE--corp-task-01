import { createBrowserRouter } from "react-router-dom";
import List from "../pages/List";
import Detail from "../pages/Detail";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <List></List>,
            children: [
                {
                    path: "/detail/:number",
                    element: <Detail></Detail>,
                },
            ],
        },
    ],
    {
        basename: process.env.PUBLIC_URL, // GitHub Pages에서 프로젝트의 기본 경로 설정
    }
);

export default router;
