import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Home from '../pages/Home';
import Register from '../pages/Register';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} >
                <Route path="login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
            </Route>
        </Routes>
    );
};

export default AllRoutes;