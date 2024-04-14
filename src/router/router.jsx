import { createBrowserRouter } from 'react-router-dom';
import List from '../pages/List';
import Detail from '../pages/Detail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <List></List>,
        children: [
            {
                path: "/detail/:number",
                element: <Detail></Detail>,
            }
        ],
    }
]);

export default router;