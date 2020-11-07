import React, { useState } from 'react'

interface RegisterProps {

}

export const Register: React.FC<RegisterProps> = () => {
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const { email, password, username } = inputs;

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const body = { email, password, username }
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
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
            <div className="registerForm" >
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="email"
                        value={email}
                        onChange={e => handleChange(e)}
                        type="email"
                        name="email"
                    />
                    <input
                        placeholder="username"
                        value={username}
                        onChange={e => handleChange(e)}
                        type="username"
                        name="username"
                    />

                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={e => handleChange(e)}
                        name="password"
                    />
                    <div className="submitButtonContainer">
                        <button type="submit" className="submitButton">Register</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}