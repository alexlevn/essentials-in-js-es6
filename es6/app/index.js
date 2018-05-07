import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const api_key = '5717d2e26ac63cf7a5c4577c5bb7eaa5';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // city: 'San Francisco'
      // city:'Chicago'
      city:'New York'

    }

  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
      .then(res => res.json())
      .then(json => {
        this.setState({description: json.weather[0].description})
      });
  }

  render() {
    return (
      <div>
        <h1>Weather Report for {this.state.city}</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'))

// import React, {Component} from 'react'; import ReactDOM from 'react-dom';
// console.log("Hello  ss"); ReactDOM.render(     <div>ABC</div>,
// document.getElementById('root'));