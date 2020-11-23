import React, { useState } from 'react';
import styled from 'styled-components'


interface LoginProps {
    setAuth: any;
};

interface UserInputs {
    email: string;
    password: string;
};
export const Login: React.FC<LoginProps> = () => {
    const [inputs, setInputs] = useState<UserInputs>({
        email: "",
        password: "",
    });
    const handleChange = (e: any) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };
    const { email, password } = inputs;

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const body = { email, password }
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                console.log(parseRes.token)
            }
        } catch (err) {
            alert('It seems there is already an account with this Email and/or Username')
            console.log(err)
        };
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
};