import styled from 'styled-components';
export const TopBar = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    top:0;
    height: 60px;
    display:flex;
    margin-top:25px;
    h4{
        font-size: 35px;
        margin-left:20px;
        font-weight:400;
    }
`

export const DashboardBody = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #f5f5f5;
`

export const UserAvatar = styled.div`
    background-color: lightblue;
    width: 45px;
    height: 45px;
    border-radius: 30px;
    position:absolute;
    right:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    img {
        width: 65px;
        height: 65px;
        border-radius:35px;
    }
`

export const WorkoutTrackerCard = styled.div`
    font-size:25px;
    width: 250x;
    height: 150px;
    background-color: lightblue;
    border-radius: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:25px;
`

export const DietTrackerCard = styled.div`
    width:100%;
    background-color: #49d1af;
    height: 100px;
    display:flex;
    flex-direction:row;
    margin-top:35px;
`

export const TodaysCalories = styled.div`
    width: 40%;
    height: 100%;
    border:none;
    border-right:1px solid #f5f5f5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h2 {
        font-size:16px;
        color: #f5f5f5;
        margin-top:10px;
        font-weight:600;
        opacity:.8;
    };
    h1 {
        font-size:40px;
        color:#f5f5f5;
        font-weight:400;
        margin-top:10px;
    }
`

export const Macros = styled.div`
    width:60%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#f5f5f5;
    .macrosHeader {
        margin-left:5px;
        margin-top:18px;
        font-weight:600;
        opacity:.8;
    }
`
export const MacrosCategories = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin-right:15px;
    .macro {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
`

export const GoalSetting = styled.div`
    font-size:25px;
    width: 250x;
    height: 150px;
    background-color: lightblue;
    border-radius: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:25px;
`

export const DietTrackerLink = styled.div`
    height: 200px;
    width: 100%;
    background-color:#49d1af;
    margin-top:15px;
`
export const WorkoutTrackerLink = styled.div`
    height: 200px;
    width: 100%;
    background-color:#49d1af;
    margin-top:15px;
`