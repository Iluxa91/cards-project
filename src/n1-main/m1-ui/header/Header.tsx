import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.container}>
            <div>
                <NavLink to={'/login'} className={({isActive})=>
                    isActive? s.active : ''}>Login</NavLink>
            </div>
            <div>
                <NavLink to={'/password-recover'} className={({isActive})=>
                    isActive? s.active : ''}>Password recover</NavLink>
            </div>
            <div>
                <NavLink to={'/new-password'} className={({isActive})=>
                    isActive? s.active : ''}>New Password</NavLink>
            </div>
            <div>
                <NavLink to={'/registration'} className={({isActive})=>
                    isActive? s.active : ''}>Registration</NavLink>
            </div>
            <div>
                <NavLink to={'/profile'} className={({isActive})=>
                    isActive? s.active : ''}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/error'} className={({isActive})=>
                    isActive? s.active : ''}>Page not found</NavLink>
            </div>
            <div>
                <NavLink to={'/super-components'} className={({isActive})=>
                    isActive? s.active : ''}>Super components</NavLink>
            </div>
        </div>
    );
};
