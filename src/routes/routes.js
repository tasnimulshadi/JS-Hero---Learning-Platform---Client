import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../pages/Home/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <div>Courses</div>
            },
            {
                path: '/blog',
                element: <div>blog</div>
            },
            {
                path: '/faq',
                element: <div>faq</div>
            },
        ]
    }
]);

export default routes;