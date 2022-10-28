import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const Signin = () => {
    const { user, googleSignIn, signInUser } = useContext(AuthContext);

    // redirect
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location.state?.from?.pathname || '/';


    const handleUserSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!user) {
            signInUser(email, password)
                .then(result => {
                    toast.success('User logged in');
                    form.reset();
                    // redirect
                    navigate(previousLocation, { replace: true });
                })
                .catch(error => {
                    toast.error(error.message);
                    console.error(error);
                })
        }
        else {
            toast.error('User already signed in');
        }
    };

    const handleGoogleSignIn = () => {
        if (!user) {
            googleSignIn()
                .then(result => {
                    toast.success('User logged in');
                    // console.log(result.user);
                    navigate(previousLocation, { replace: true });
                })
                .catch(error => {
                    toast.error(error.message);
                    console.error(error);
                })
        }
        else {
            toast.error('User already signed in');
        }
    };


    return (
        <div className='dark:bg-gray-900 dark:text-gray-100 py-16'>
            <div className="container ">
                <div className="mx-auto max-w-md p-4 rounded-md shadow-md shadow-indigo-400 sm:p-8">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Sign in</h2>
                    <p className=" text-center dark:text-gray-400">Dont have account?
                        <Link to='/register' state={{ from: previousLocation }} className="focus:underline hover:underline"> Sign up here</Link>
                    </p>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full p-4 space-x-4 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full border-black dark:border-gray-400" />
                        <p className="px-3 dark:text-gray-400">OR</p>
                        <hr className="w-full border-black dark:border-gray-400" />
                    </div>
                    <form onSubmit={handleUserSignIn} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border-2 border-gray-400 rounded-md  dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <button rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</button>
                                </div>
                                <input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border-2 border-gray-400 rounded-md dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-400  text-white dark:text-gray-900">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;