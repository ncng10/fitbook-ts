import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../components/UserDataContext';
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

export const Dashboard: React.FC<DashboardProps> = () => {
    const name = useContext(UserContext)
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