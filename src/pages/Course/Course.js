import React from 'react';
import { useLoaderData, Link, Outlet, NavLink } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    // console.log(course);

    //active nav class
    const activeNav = ({ isActive }) => isActive ? 'text-indigo-400 border-indigo-400' : '';

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                {/* lesson list */}
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
                    <h2 className="text-xl font-semibold tracking-widest text-indigo-400">{course.title}</h2>
                    <p className="">{course?.details}</p>
                    <hr className='border-black dark:border-white' />
                    {
                        course.lessons.map(lesson =>
                            <div className="flex space-x-2 sm:space-x-4" key={lesson.lesson_id}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <NavLink to={`/course/${course.id}/lesson/${lesson.lesson_id}`} className={activeNav}>{lesson.title}</NavLink >
                                </div>
                            </div>
                        )
                    }
                    <hr className='border-black dark:border-white' />
                    <div className='flex items-center gap-3'>
                        <img className='w-12 rounded-full' src={course?.author?.img} alt="" />
                        <div>
                            <p className=""><span className='font-semibold'>Ratings:</span> {course?.rating?.number}</p>
                            <p className=""><span className='font-semibold'>Instractor:</span> {course?.author?.name}</p>
                        </div>
                    </div>
                </div>
                {/* lesson video */}
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Course;