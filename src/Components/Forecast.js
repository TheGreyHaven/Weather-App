import React from 'react';
import tracker from '../dataTracker';



const Forecast = props => (
	<div className="forecastSection">
		<div className="forecast-box">
			<p>{tracker.nextDays[0]}</p>
			{props.day1.low && `Low: ${props.day1.low}° `}
			<br></br>
			<br></br>
			{props.day1.high && `High: ${props.day1.high}° `}
			<br></br>
			<br></br>
			{props.day1.avg && `Average: ${props.day1.avg}° `}
			<br></br>
			<br></br>
			{props.day1.mode && `Mode: ${props.day1.mode}° `}

		</div>
		<div className="forecast-box">
			<p>{tracker.nextDays[1]}</p>
			{props.day2.low && `Low: ${props.day2.low}° `}
			<br></br>
			<br></br>
			{props.day2.high && `High: ${props.day2.high}° `}
			<br></br>
			<br></br>
			{props.day2.avg && `Average: ${props.day2.avg}° `}
			<br></br>
			<br></br>
			{props.day2.mode && `Mode: ${props.day2.mode}° `}
		</div>
		<div className="forecast-box">
			<p>{tracker.nextDays[2]}</p>
			{props.day3.low && `Low: ${props.day3.low}° `}
			<br></br>
			<br></br>
			{props.day3.high && `High: ${props.day3.high}° `}
			<br></br>
			<br></br>
			{props.day3.avg && `Average: ${props.day3.avg}° `}
			<br></br>
			<br></br>
			{props.day3.mode && `Mode: ${props.day3.mode}° `}
		</div>
		<div className="forecast-box">
			<p>{tracker.nextDays[3]}</p>
			{props.day4.low && `Low: ${props.day4.low}° `}
			<br></br>
			<br></br>
			{props.day4.high && `High: ${props.day4.high}° `}
			<br></br>
			<br></br>
			{props.day4.avg && `Average: ${props.day4.avg}° `}
			<br></br>
			<br></br>
			{props.day4.mode && `Mode: ${props.day4.mode}° `}
		</div>
		<div className="forecast-box">
			<p>{tracker.nextDays[4]}</p>
			{props.day5.low && `Low: ${props.day5.low}° `}
			<br></br>
			<br></br>
			{props.day5.high && `High: ${props.day5.high}° `}
			<br></br>
			<br></br>
			{props.day5.avg && `Average: ${props.day5.avg}° `}
			<br></br>
			<br></br>
			{props.day5.mode && `Mode: ${props.day5.mode}° `}
		</div>
	</div>

)


export default Forecast;