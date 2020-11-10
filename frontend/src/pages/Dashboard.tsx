import React, { useEffect, useState } from 'react'
import {
    DietTrackerCard, TopBar,
    UserAvatar, WorkoutTrackerCard,
    GoalSetting,
    DashboardBody,
    TodaysCalories,
    Macros,
    MacrosCategories,
    DietTrackerLink,
    WorkoutTrackerLink
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

    // const stringName = name.toString();
    // const firstLetter = stringName.charAt(0);

    return (
        <React.Fragment>
            <TopBar>
                <h4>Dashboard</h4>
                <UserAvatar>
                    <img src={require('../StyledComponents/avatar.png').default} alt="user avatar" />
                </UserAvatar>
            </TopBar>
            <DashboardBody>
                <DietTrackerCard>
                    <TodaysCalories >
                        <h2>Today's Calories</h2>
                        <h1>2178</h1>
                    </TodaysCalories>
                    <Macros>
                        <div className="macrosHeader">Today's Macros</div>
                        <MacrosCategories>
                            <div className="macro">
                                <span>Protein</span>
                                <span>178g</span>
                            </div>
                            <div className="macro">
                                <span>Carbs</span>
                                <span>178g</span>
                            </div>
                            <div className="macro">
                                <span>Fats</span>
                                <span>178g</span>
                            </div>
                        </MacrosCategories>
                    </Macros>
                </DietTrackerCard>
                <DietTrackerLink >{`Diet Tracker ->`}</DietTrackerLink>
                <WorkoutTrackerLink>{`Workout Tracker->`}</WorkoutTrackerLink>
            </DashboardBody>
        </React.Fragment>
    );
}