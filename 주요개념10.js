import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 10.state 끌어올리기 실습
// ======== 온도계 앱=========

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>딱!! 끓여집니다.</p>;
  }
  return <p>너어무 부족헌디?</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 5 / 9) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) /1000;
  return rounded.toString();
}


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state ={temperature: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    //부모 컴포넌트인 calc클래스에 상속받고 여긴 props로 바꿔주자
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>온도 넣어보랑께 </legend>
        {scaleNames[scale]}:
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({sclae: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({sclae: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? 
    tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ?
    tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput 
          scale="c" 
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput 
          scale="f" 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);