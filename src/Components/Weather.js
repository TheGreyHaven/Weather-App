import React from 'react';

const Weather = props => (
	<div className="weatherSection">
		<div className="weather-icon">
			{props.icon && <img alt="weather icon" src={props.icon}></img>}
		</div>
		<div className="weather-temp">
			{props.temperature && <p>{props.temperature.toFixed(0)}°</p>}
		</div>
		<div className="weather-error">
			{props.error && <p>{props.error}</p>}
		</div>
	</div>
);
export default Weather;