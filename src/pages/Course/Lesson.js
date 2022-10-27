import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Lesson = () => {
    const lesson = useLoaderData();
    // console.log(lesson);
    return (
        <div className="flex flex-col gap-3  p-4 md:p-8 lg:p-12">
            <img src={lesson.imgUrl} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
            <h3 className='text-xl'><span className='text-indigo-400'>{lesson.lesson_id}:</span> {lesson.title}</h3>
        </div>
    );
};

export default Lesson;

