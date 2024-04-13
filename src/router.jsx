import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/detail/:number",
                element: <Detail></Detail>,
            }
        ],
    }
]);

export default router;