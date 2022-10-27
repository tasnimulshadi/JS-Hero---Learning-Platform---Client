import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Main from '../layout/Main/Main';
import Course from '../pages/Course/Course';
import Lesson from '../pages/Course/Lesson';
import Courses from '../pages/Courses/Courses';
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
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/course/:course_id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.course_id}`),
                children: [
                    {
                        path: '/course/:course_id/lesson/:lesson_id',
                        element: <Lesson></Lesson>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.course_id}/lesson/${params.lesson_id}`),
                    }
                ]
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
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default routes;