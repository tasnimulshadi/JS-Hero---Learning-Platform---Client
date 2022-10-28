import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactPlayer from 'react-player'

const Lesson = () => {
    const lesson = useLoaderData();
    // console.log(lesson);
    return (
        <div className="flex flex-col gap-3  p-4 md:p-8 lg:p-12">
            {/* Render a YouTube video player */}
            {
                lesson.videoUrl ?
                    <div className='w-full h-[250px] md:h-[400px] lg:h-[300px] xl:h-[360px] shadow-lg'>
                        <ReactPlayer
                            url={lesson.videoUrl}
                            controls={false}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    :
                    <img src={lesson.imgUrl} alt="" className=" shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
            }
            <h3 className='text-xl'><span className='text-indigo-400 font-semibold'>{lesson.lesson_no}:</span> {lesson.title}</h3>
        </div>
    );
};

export default Lesson;

