import React from 'react';
import {LoginForm} from "../../../n2-features/f2-auth/login/LoginForm";
import RegistrationForm from "../../../n2-features/f2-auth/register/RegistrationForm";
import {ErrorPage} from '../errorPage/ErrorPage';
import {ProfilePage} from '../profilePage/ProfilePage';
import {PasswordRecoverForm} from '../../../n2-features/f2-auth/login/PassRecoverForm';
import NewPasswordForm from '../../../n2-features/f2-auth/login/NewPasswordForm';
import {CommonComponents} from '../common/CommonComponents';
import {Navigate, Route, Routes} from 'react-router-dom';

export const RoutesPage = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                <Route path={'/login'} element={<LoginForm/>}/>
                <Route path={'/password-recover/'} element={<PasswordRecoverForm/>}/>
                <Route path={'/new-password'} element={<NewPasswordForm/>}/>
                <Route path={'/registration'} element={<RegistrationForm/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/super-components'} element={<CommonComponents/>}/>
                <Route path={'/*'} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
};
