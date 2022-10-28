import React from 'react';
import { FaCheck, FaDollarSign } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const LessonList = ({ course_id, lesson, boughtCourse }) => {
    // unless get premium access some lessons are free and some are locked
    // if has premium access then all lessons are free to watch
    let paid = !lesson.premium;
    if (boughtCourse) {
        paid = boughtCourse;
    }
    // console.log(paid);

    return (
        <div className="flex items-center space-x-2 sm:space-x-4">
            {
                paid
                    ?
                    <>
                        <FaCheck />
                        <div className="space-y-2">
                            <NavLink
                                to={`/course/${course_id}/lesson/${lesson.lesson_id}`}
                                className={({ isActive }) => isActive ? 'text-indigo-400' : undefined}
                            >
                                <span className='font-semibold'>{lesson.lesson_no}:</span> {lesson.title}
                            </NavLink >
                        </div>
                    </>
                    :
                    <>
                        <FaDollarSign />
                        <div className="space-y-2 cursor-default" title='Get premium access to get the lesson'>
                            <span className='font-semibold'>{lesson.lesson_no}:</span> {lesson.title}
                        </div>
                    </>
            }
        </div >
    );
};

export default LessonList;