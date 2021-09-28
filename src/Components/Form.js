import React from 'react';

const Form = props => (

	<form className="form" onSubmit={props.getWeather}>
		<input className="form-element" type="text" name="city" placeholder="City..." />
		<input className="form-element" type="text" name="country" placeholder="Country..." />
		<button className="form-element">Get 5 Day Forcast</button>
	</form>
)

export default Form;