
class DataTracker {

	static weatherData = [];

	static nextDays = [];

	static days = {};



	static insert = (n) => {
		this.weatherData.push(n);
		this.getDays(this.weatherData[0].list);
	}

	static getDays = (data) => {
		let weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
		const todayDate = new Date();
		const today = weekDays[todayDate.getDay()];

		for (let i = 0; i < data.length; i++) {
			let dayDate = new Date(data[i].dt * 1000);
			let day = weekDays[dayDate.getDay()];

			if (day !== today) {
				this.days[day] = this.days[day] || [];
			}
			if (this.days[day]) {
				this.days[day].push(data[i].main.temp)
			}
		}
		this.nextDays = Object.keys(this.days)
	}

	static showMin = (data) => {
		return Math.min(...data).toFixed(0);
	}

	static showMax = (data) => {
		return Math.max(...data).toFixed(0);
	}

	static showMean = (data) => {
		const reducer = (prevVal, currentVal) => prevVal + currentVal;
		return ((data.reduce(reducer) / data.length).toFixed(0))
	}

	static showMode = (data) => {
		const frequency = {};
		let compare = 0;
		let mostFreq;
		for (let i = 0; i < data.length; i++) {
			frequency[data[i]] = frequency[data[i]] + 1 || 1;
			if (frequency[data[i]] > compare) {
				compare = frequency[data[i]];
				mostFreq = data[i];
			}
		}
		return (mostFreq.toFixed(0));
	}

}

export default DataTracker;