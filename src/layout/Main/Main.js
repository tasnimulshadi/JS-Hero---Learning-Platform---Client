import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { themeContext } from '../../context/ThemeProvider';

const Main = () => {
    const { darkmode } = useContext(themeContext);

    return (
        <div className={darkmode ? 'dark' : ''}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;