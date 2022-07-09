import React from 'react';
import {LoginForm} from "../../../n2-features/f2-auth/login/LoginForm";
import RegistrationForm from "../../../n2-features/f2-auth/register/RegistrationForm";
import {MainPage} from "../MainPage";
import {ErrorPage} from '../errorPage/ErrorPage';
import {ProfilePage} from '../profilePage/ProfilePage';
import {PasswordRecoverForm} from '../../../n2-features/f2-auth/login/PassRecoverForm';
import NewPasswordForm from '../../../n2-features/f2-auth/login/NewPasswordForm';
import {CommonComponents} from '../common/CommonComponents';
import {Route, Routes } from 'react-router-dom';

export const RoutesPage = () => {
    return (
        <div>
            <Routes>
                <Route path={'/password-recover/'} element={<PasswordRecoverForm/>}/>
                <Route path={'/login'} element={<LoginForm/>}/>
                <Route path={'/login/password-recover/'} element={<PasswordRecoverForm/>}/>
                <Route path={'/login/new-password'} element={<NewPasswordForm/>}/>
                <Route path={'/registration'} element={<RegistrationForm/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/super-components'} element={<CommonComponents/>}/>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/*'} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
};
