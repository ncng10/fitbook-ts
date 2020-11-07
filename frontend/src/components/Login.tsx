import React, { useState } from 'react';
import styled from 'styled-components'


interface LoginProps {
    setAuth: any;
}

interface UserInputs {
    email: string;
    password: string;
}
export const Login: React.FC<LoginProps> = () => {
    const [inputs, setInputs] = useState<UserInputs>({
        email: "",
        password: "",
    });
    const handleChange = (e: any) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };
    const { email, password } = inputs;
    const handleSubmit = (e: any) => {
        e.preventDefault();

    };
    return (
        <React.Fragment>
            <div className="loginForm" >
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="email"
                        value={email}
                        onChange={e => handleChange(e)}
                        type="email"
                        name="email"
                    />
                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={e => handleChange(e)}
                        name="password"
                    />
                    <div className="submitButtonContainer">
                        <button type="submit" className="submitButton">Login</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}