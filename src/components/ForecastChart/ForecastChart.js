import React from 'react'
import PropTypes from 'prop-types';
//Rechart
import {Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'


const ForecastChart = ({data}) => {
    console.log(data);
    return (
        <ResponsiveContainer height={250} width={"95%"}> 
            <LineChart
                margin= {{top: 20, bottom: 20, left: 5, right: 5}}
                data={data} 
                >
                    <XAxis dataKey="dayHour"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid></CartesianGrid>
                    <Line type="monotone" dataKey="min" stroke="#ffe100"></Line>
                    <Line type="monotone" dataKey="máx" stroke="#ff3c00"></Line>
                </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data : PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.string.isRequired,
            max: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default ForecastChart
