import React, { useEffect, useState } from 'react'
import {
    DietTrackerCard, TopBar,
    UserAvatar, WorkoutTrackerCard,
    GoalSetting,
    DashboardBody
} from '../StyledComponents/UserStyles';
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

    const stringName = name.toString();
    const firstLetter = stringName.charAt(0);

    return (
        <React.Fragment>
            <TopBar>
                <h3>Dashboard</h3>
                <UserAvatar>{firstLetter}</UserAvatar>
            </TopBar>
            <DashboardBody>
                <WorkoutTrackerCard>Workout Tracker</WorkoutTrackerCard>
                <DietTrackerCard>Diet Tracker</DietTrackerCard>
                <GoalSetting>Goal Setting</GoalSetting>
            </DashboardBody>
        </React.Fragment>
    );
}