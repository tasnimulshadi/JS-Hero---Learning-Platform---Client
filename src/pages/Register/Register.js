import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { user, createUser, updateUser } = useContext(AuthContext);

    const handleUserRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;

        if (imgUrl.length > 100) {
            toast.error('Photo url too long');
            return;
        }
        if (!user) {
            createUser(email, password)
                .then(result => {
                    updateUser(name, imgUrl)
                        .then(() => {
                            toast.success('User Created');
                            form.reset();
                        })
                        .catch(error => {
                            toast.error(error.message);
                            console.error(error);
                        })
                    // console.log(result?.user);
                })
                .catch(error => {
                    toast.error(error.message);
                    console.error(error);
                })
        }
        else {
            toast.error('User already signed in');
        }
    }


    return (
        <div className='dark:bg-gray-900 dark:text-gray-100 py-16'>
            <div className="container">
                <div className="mx-auto max-w-md p-4 rounded-md shadow-md shadow-indigo-400 sm:p-8 ">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
                    <p className=" text-center dark:text-gray-400">Already have an account?
                        <Link to='/signin' className="focus:underline hover:underline"> Sign in here</Link>
                    </p>
                    <form onSubmit={handleUserRegister} className="space-y-8 mt-5">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="user name" className="w-full px-3 py-2 border-2 border-gray-400 rounded-md  dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="imgUrl" className="block text-sm">Profile Image Url</label>
                                <input type="text" name="imgUrl" id="imgUrl" placeholder="img url" className="w-full px-3 py-2 border-2 border-gray-400 rounded-md  dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border-2 border-gray-400 rounded-md  dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" required />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border-2 border-gray-400 rounded-md dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" required />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-400  text-white dark:text-gray-900">Sign up</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Register;