import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserDataContext';
import { Line } from 'react-chartjs-2';
interface CalorieTrackerProps {

}

export const CalorieTracker: React.FC<CalorieTrackerProps> = ({ }) => {
    const name = useContext(UserContext);
    const [chartData, setChartData] = useState({});
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

    const { calories } = inputs;
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
    };

    const getData = async () => {
        const calorieAxis: string[] = [];
        const dateAxis: string[] = [];
        try {
            await fetch(`http://localhost:5000/api/nutrition/nutrition-data`,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        token: localStorage.token
                    },
                }).then(res => res.json())
                .then(data => data.map((nutritionInfo: any) => calorieAxis.push(nutritionInfo.entry_calories)));
            setChartData({
                labels: dateAxis,
                datasets: [{
                    label: 'aaa',
                    data: calorieAxis
                }]
            })
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <React.Fragment>
            <div>{name}</div>
            <Line
                width={200}
                height={400}
                data={chartData}
                options={{
                    responsive: true,
                    title: {
                        text: "Calories", display: true
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true,
                                    max: 3000,
                                    min: 0,
                                },
                                gridLines: {
                                    display: true
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: true,
                                }
                            }
                        ]
                    }
                }
                }
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