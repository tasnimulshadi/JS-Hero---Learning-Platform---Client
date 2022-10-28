import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    // console.log(course);
    return (
        <div className="max-w-xs w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={course.image_url} alt="" className="object-cover object-center w-full h-36 rounded-t-md dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-4 h-52">
                <h2 className="text-xl font-semibold tracking-wide">{course?.title}</h2>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm'>View: {course?.total_view}</p>
                        <p className='text-sm'>Ratings: {course?.rating?.number}</p>
                    </div>
                    <Link to={`/course/${course.id}/lesson/${course.lessons[0].lesson_id}`}>
                        <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-400 text-white dark:text-gray-900 mt-2">Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;