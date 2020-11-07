import React from 'react'
import { Register } from '../components/Register'

interface RegisterPageProps {

}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <React.Fragment>
            <Register />
        </React.Fragment>
    );
}