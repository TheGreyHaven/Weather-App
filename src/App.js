import React, { Component } from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';
import Forecast from './Components/Forecast'
import tracker from './dataTracker';
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    error: undefined,
    lat: undefined,
    lon: undefined,
    icon: undefined,
    day1: { high: undefined, low: undefined, avg: undefined, mode: undefined },
    day2: { high: undefined, low: undefined, avg: undefined, mode: undefined },
    day3: { high: undefined, low: undefined, avg: undefined, mode: undefined },
    day4: { high: undefined, low: undefined, avg: undefined, mode: undefined },
    day5: { high: undefined, low: undefined, avg: undefined, mode: undefined }
  }

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            error: "",
            lat: data.coord.lat,
            lon: data.coord.lon,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          })
          this.getForecast5();
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            error: "Enter valid city and country",
            lat: undefined,
            lon: undefined
          })
        }
      })


  }

  getForecast5 = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=${API_KEY}&units=imperial`)
      .then(async response => response.json())
      .then(data => {
        tracker.insert(data);
        this.setState({
          day1: {
            low: tracker.showMin(tracker.days[tracker.nextDays[0]]), high: tracker.showMax(tracker.days[tracker.nextDays[0]]),
            avg: tracker.showMean(tracker.days[tracker.nextDays[0]]), mode: tracker.showMode(tracker.days[tracker.nextDays[0]])
          },
          day2: {
            low: tracker.showMin(tracker.days[tracker.nextDays[1]]), high: tracker.showMax(tracker.days[tracker.nextDays[1]]),
            avg: tracker.showMean(tracker.days[tracker.nextDays[1]]), mode: tracker.showMode(tracker.days[tracker.nextDays[1]])
          },
          day3: {
            low: tracker.showMin(tracker.days[tracker.nextDays[2]]), high: tracker.showMax(tracker.days[tracker.nextDays[2]]),
            avg: tracker.showMean(tracker.days[tracker.nextDays[2]]), mode: tracker.showMode(tracker.days[tracker.nextDays[2]])
          },
          day4: {
            low: tracker.showMin(tracker.days[tracker.nextDays[3]]), high: tracker.showMax(tracker.days[tracker.nextDays[3]]),
            avg: tracker.showMean(tracker.days[tracker.nextDays[3]]), mode: tracker.showMode(tracker.days[tracker.nextDays[3]])
          },
          day5: {
            low: tracker.showMin(tracker.days[tracker.nextDays[4]]), high: tracker.showMax(tracker.days[tracker.nextDays[4]]),
            avg: tracker.showMean(tracker.days[tracker.nextDays[4]]), mode: tracker.showMode(tracker.days[tracker.nextDays[4]])
          }

        })
      })

  }



  render() {

    return (
      <div className="App">

        <Titles />
        <Form getWeather={this.getWeather} />

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          icon={this.state.icon}
          error={this.state.error}
        />
        <Forecast day1={this.state.day1} day2={this.state.day2} day3={this.state.day3} day4={this.state.day4} day5={this.state.day5} />
      </div>
    )
  }
}
export default App;
