import React from "react";
import ReactFrappeChart from "react-frappe-charts";

<ReactFrappeChart
    type="bar"
    colors={["#121212"]}
    axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
    height={150}
    data={{
        labels: ["11/9/2020", "11/10/2020", "11/11/2020", "11/12/2020", "11/13/2020"],
        datasets: [{ values: [180, 180, 178, 177, 177] }]
    }}
/>