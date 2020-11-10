import React from 'react'
import ReactFrappeChart from "react-frappe-charts";

interface CalorieTrackerProps {

}

export const CalorieTracker: React.FC<CalorieTrackerProps> = ({ }) => {

    const calories = [2000, 2100, 1987, 2001, 2020, 2457, 2000, 2100, 1987, 2001, 2020, 2457, 3000];
    const dates = ['11/9/2020', '11/10/2020', '11/11/2020', '11/12/2020', '11/13/2020', '11/14/2020'
        , '11/15/2020', '11/16/2020', '11/17/2020', '11/18/2020', '11/19/2020', '11/20/2020', '11/21/2020',
        '11/15/2020', '11/16/2020', '11/17/2020', '11/18/2020', '11/19/2020', '11/20/2020', '11/21/2020',
        '11/15/2020', '11/16/2020', '11/17/2020', '11/18/2020', '11/19/2020', '11/20/2020', '11/21/2020',
    ];
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return (
        <React.Fragment>
            <ReactFrappeChart
                title={`Calories for ${dates[0]} - ${dates[10]}`}
                type="bar"
                colors={["#121212"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                height={150}
                data={{
                    labels: dates,
                    datasets: [{ values: calories }]
                }}
            />
            <div>{today}</div>
        </React.Fragment>
    );
}