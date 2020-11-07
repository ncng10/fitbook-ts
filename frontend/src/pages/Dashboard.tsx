import React, { useEffect, useState } from 'react'
import { TopBar, UserAvatar } from '../StyledComponents/UserStyles';
type DashboardProps = {
    setAuth: any
};
interface UserInformation {
    user_name: string,
    response: Response
};

export const Dashboard: React.FC<DashboardProps> = () => {
    const [name, setName] = useState("")
    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/api/user/dashboard",
                {
                    method: "GET",
                    headers: { token: localStorage.token }
                });
            const parseRes: UserInformation = await response.json();
            setName(parseRes.user_name)
            console.log(parseRes.user_name)
        } catch (err) {
            console.log(err.message)
        }
    };

    function removeToken() {
        localStorage.removeItem('token')
    };

    useEffect(() => {
        getName()
    }, []);

    return (
        <React.Fragment>
            <TopBar>
                <UserAvatar />
            </TopBar>
            <h3>Dashboard for {name}</h3>
        </React.Fragment>
    );
}