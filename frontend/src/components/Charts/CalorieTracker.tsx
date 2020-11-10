import React, { ChangeEvent, useContext, useState } from 'react'
import ReactFrappeChart from "react-frappe-charts";
import { UserContext } from '../UserDataContext';

interface CalorieTrackerProps {

}

export const CalorieTracker: React.FC<CalorieTrackerProps> = ({ }) => {
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const [inputs, setInputs] = useState({
        calories: "",
        protein: "",
        carbs: "",
        fats: ""
    });

    const name = useContext(UserContext)

    const { calories } = inputs;

    const [calorieData, setCalorieData] = useState([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const inputData = async (event: any) => {
        event.preventDefault();
        try {
            const body = { calories }
            const response = await fetch(`http://localhost:5000/api/nutrition/entry`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        token: localStorage.token
                    },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await response.json();
            console.log(parseRes);
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <React.Fragment>
            <div>{name}</div>
            <ReactFrappeChart
                // title={`Calories for ${dates[0]} - ${dates[10]}`}
                type="bar"
                colors={["#121212"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                height={150}
                data={{
                    datasets: [{ values: calorieData }]
                }}
            />
            <div>{today}</div>
            <form onSubmit={inputData}>
                <input
                    placeholder="calories"
                    value={calories}
                    onChange={e => handleChange(e)}
                    name="calories"
                />
                <button type="submit">submit</button>
            </form>
        </React.Fragment>
    );
}