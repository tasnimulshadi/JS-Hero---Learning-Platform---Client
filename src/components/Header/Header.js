import React, { useEffect, useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';
import { themeContext } from '../../context/ThemeProvider';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user);
    const [categoryList, setCategoryList] = useState([]);

    //theme
    const { darkmode, setDarkMode } = useContext(themeContext);

    // menu toggle for mobile responsive menu
    const [menuToggle, setMenuToggle] = useState(false);
    // categories dropdown toggle
    const [dropdownToggle, setDropdownToggle] = useState(false);

    //active nav class
    const activeNav = ({ isActive }) => isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-indigo-400 border-indigo-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent';

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('User logged out');
            }).catch((error) => {
                toast.error(error.message);
                console.error(error);
            });
    }

    // fetch categories
    useEffect(() => {
        fetch('https://ph-assignment-10-learning-platform-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, []);

    return (
        <header className="py-4 dark:bg-gray-800 dark:text-gray-100 border-b-2">
            <div className="container flex justify-between h-16 mx-auto">
                <Link to="/" className="flex items-center p-2">
                    <h2 className='text-2xl font-semibold'><span className='text-indigo-400 font-extrabold text-3xl'>JS</span>hero</h2>
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className={activeNav}>Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/courses/01" className={activeNav}>Courses</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/faq" className={activeNav}>FAQ</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/blog" className={activeNav}>Blog</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button onClick={() => setDarkMode(!darkmode)} className="self-center px-5 py-3 rounded" title='Click to change theme'>
                        {darkmode ? <FaMoon /> : <FaSun />}
                    </button>
                    {
                        user ?
                            <>
                                <button onClick={handleSignOut} className="self-center px-8 py-3 rounded">Sign out</button>
                                <img className='w-10 h-10 rounded-full' src={user.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" title={user.displayName} />
                            </>
                            :
                            <Link to='/signin' className="self-center px-8 py-3 rounded">Sign in</Link>
                    }

                </div>
                <button onClick={() => setMenuToggle(!menuToggle)} className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* mobile responsive menuToggle down menu*/}
            <div className='relative'>
                <div className={`absolute bg-white border-b-2 dark:bg-gray-800 dark:text-gray-100 w-full lg:hidden mb-4 ${menuToggle ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col gap-6 mt-5 mb-10  items-center'>
                        <li>
                            <NavLink to="/home" className={activeNav}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses/01" className={activeNav}>Courses</NavLink>
                        </li>
                        {/* categories dropdown toggle */}
                        {
                            user &&
                            <li className="relative">
                                <div>
                                    <button onClick={() => setDropdownToggle(!dropdownToggle)} className="flex justify-center items-center gap-2 w-full px-4" >
                                        Categories
                                        <FaChevronDown />
                                    </button>
                                </div>

                                {
                                    dropdownToggle &&
                                    <div className="mt-2 rounded-md bg-white shadow-lg" >
                                        <div className="py-1 flex flex-col w-full">
                                            {
                                                categoryList.map(category => <Link
                                                    key={category.id}
                                                    to={`/courses/${category.id}`}
                                                    className='text-gray-900 px-4 py-2'>
                                                    {category.name}
                                                </Link>)
                                            }
                                        </div>
                                    </div>
                                }
                            </li>
                        }
                        <li>
                            <NavLink to="/faq" className={activeNav}>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={activeNav}>Blog</NavLink>
                        </li>
                        {/* Dark mode - theme change */}
                        <button onClick={() => setDarkMode(!darkmode)} className="self-center px-5 rounded" title='Click to change theme'>
                            {darkmode ? <FaMoon /> : <FaSun />}
                        </button>
                        {
                            user ?
                                <>
                                    <button onClick={handleSignOut} className="self-center px-8  rounded">Sign out</button>
                                    <img className='w-10 h-10 rounded-full' src={user.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" title={user.displayName} />
                                </>
                                :
                                <Link to='/signin' className="self-center px-8  rounded">Sign in</Link>
                        }
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;