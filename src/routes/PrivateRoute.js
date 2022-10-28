import React from 'react';
import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return (
            <div className='h-[50vh] pt-16 dark:bg-gray-800 dark:text-gray-100'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-400 mx-auto">
                    {/* spinner */}
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;