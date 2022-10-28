import React, { useContext, createRef } from 'react';
import Pdf from 'react-to-pdf';
import { useLoaderData, Outlet, Link, useLocation } from 'react-router-dom';
import LessonList from './LessonList';
import { searchInLocalStorage } from '../../localStorage/localStorage';
import { AuthContext } from '../../context/AuthProvider';
import { FaDownload } from "react-icons/fa";


const Course = () => {
    const location = useLocation();
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(course.lessons);

    // check for user bought the course already or not (true/false)
    const boughtCourse = searchInLocalStorage(user.uid, course.id);

    // for PDF
    const ref = createRef();
    const options = {
        // orientation: 'landscape',
        unit: 'px',
        // format: [4, 2]
    };

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100" >
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                {/* lesson list */}
                <div ref={ref} className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
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
                    {/* Author & download */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img className='w-12 rounded-full' src={course?.author?.img} alt="" />
                            <div>
                                <p className=""><span className='font-semibold'>Instractor:</span> {course?.author?.name}</p>
                                <p className=""><span className='font-semibold'>Ratings:</span> {course?.rating?.number}</p>
                            </div>
                        </div>
                        <div>
                            {/* for PDF */}
                            <Pdf targetRef={ref} filename={`${course.title} - By ${course?.author?.name}.pdf`} options={options} x={30} scale={1.3} >
                                {({ toPdf }) =>
                                    <FaDownload
                                        onClick={toPdf}
                                        title={`Download Course PDF - ${course.title}`}
                                        className='cursor-pointer text-3xl text-indigo-400 hover:scale-125 transition duration-200 ease-in-out'
                                    />
                                }
                            </Pdf>
                        </div>
                    </div>
                    {/* checkout button (Get Premium Access) */}
                    {
                        boughtCourse ||
                        <Link to={`/checkout/${course.id}`} state={{ from: location }}>
                            <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-400 text-white dark:text-gray-900 mt-2">Get Premium Access</button>
                        </Link>
                    }
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