import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.container}>
            <div><NavLink to={'/login'}>Login</NavLink></div>
            <div><NavLink to={'/login/password-recover'}>Password recover</NavLink></div>
            <div><NavLink to={'/login/new-password'}>New Password</NavLink></div>
            <div><NavLink to={'/registration'}>Registration</NavLink></div>
            <div><NavLink to={'/profile'}>Profile</NavLink></div>
            <div><NavLink to={'/error'}>Page not found</NavLink></div>
            <div><NavLink to={'/super-components'}>Super components</NavLink></div>
        </div>
    );
};
