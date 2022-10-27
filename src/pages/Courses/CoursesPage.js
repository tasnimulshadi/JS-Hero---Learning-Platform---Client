import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesPage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const courses = useLoaderData();
    // console.log(courses);

    //fetch categories
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, []);



    return (
        <section className="py-10 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid grid-cols-12">
                <div className=" hidden md:block col-span-4 lg:col-span-3">
                    <aside className="w-full h-full p-6 sm:w-60 dark:bg-gray-900 bg-gray-200 dark:text-gray-100 rounded-md">
                        <div className="space-y-2">
                            <h2 className="text-sm font-bold tracking-widest uppercase dark:text-gray-400">Course Category</h2>
                            <hr className='border-black dark:border-white' />
                            <div className="flex flex-col space-y-3">
                                {
                                    categoryList.map(category => <Link
                                        key={category.id}
                                        to={`/courses/${category.id}`}
                                        className='hover:-translate-x-1 transition duration-150 ease-in'>
                                        {category.name}
                                    </Link>)
                                }
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="col-span-12 md:col-span-8 lg:col-span-9 h-full md:pr-10 lg:pr-0 ">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoursesPage;