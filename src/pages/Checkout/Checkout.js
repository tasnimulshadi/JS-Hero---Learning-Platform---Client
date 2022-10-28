import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);


    return (
        <div className='dark:bg-gray-900 dark:text-gray-100 py-16'>
            <div className="container ">
                <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <div className="flex flex-wrap sm:flex-nowrap gap-4 space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-44 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={course.image_url} alt="" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{course.title}</h3>
                                    <p className="text-sm dark:text-gray-400">by {course?.author?.name}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">{course.price} $</p>
                                    {/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 pt-10">
                        <button type="button" className="px-6 py-3 text-xl border rounded-md bg-blue-400 text-white dark:text-gray-900 dark:border-blue-400">
                            Continue to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;