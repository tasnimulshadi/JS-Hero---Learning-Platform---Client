import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Signin from '../pages/Signin/Signin';

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
                path: '/blog',
                element: <div>blog</div>
            },
            {
                path: '/faq',
                element: <div>faq</div>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
]);

export default routes;