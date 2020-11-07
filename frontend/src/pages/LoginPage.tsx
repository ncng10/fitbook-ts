import React from 'react'
import { Login } from '../components/Login'

interface LoginPageProps {
    setAuth: any
}

export const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
    return (
        <React.Fragment>
            <Login setAuth={setAuth} />
        </React.Fragment>
    );
}