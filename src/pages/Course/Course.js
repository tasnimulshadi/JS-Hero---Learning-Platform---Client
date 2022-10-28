import React from 'react';
import { useLoaderData, Outlet, Link } from 'react-router-dom';
import LessonList from './LessonList';


const Course = () => {
    const course = useLoaderData();
    // console.log(course.lessons);
    const boughtCourse = false;

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                {/* lesson list */}
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
                    <h2 className="text-xl font-semibold tracking-widest text-indigo-400">{course.title}</h2>
                    <p className="">{course?.details}</p>
                    <hr className='border-black dark:border-white' />
                    {
                        course.lessons.map(lesson => <LessonList
                            key={lesson.lesson_id}
                            course_id={course.id}
                            lesson={lesson}
                            boughtCourse={boughtCourse}
                        ></LessonList>)
                    }
                    <hr className='border-black dark:border-white' />
                    <div className='flex items-center gap-3'>
                        <img className='w-12 rounded-full' src={course?.author?.img} alt="" />
                        <div>
                            <p className=""><span className='font-semibold'>Ratings:</span> {course?.rating?.number}</p>
                            <p className=""><span className='font-semibold'>Instractor:</span> {course?.author?.name}</p>
                        </div>
                    </div>
                    <Link to={`/checkout/${course.id}`}>
                        <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-400 text-white dark:text-gray-900 mt-2">Get Premium Access</button>
                    </Link>
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