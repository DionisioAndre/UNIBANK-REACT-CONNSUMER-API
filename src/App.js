import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './components2/navbar';
import Header from './components2/Header';
import Footer from './components2/Footer'
const App = () => {
    return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet />
        <Footer/ >
    </div>
    );
};

export default App;
