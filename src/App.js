import React, { Component } from "react";
import greetingTime from "greeting-time";
import "./App.css";

class App extends Component {
  state = { dateTime: new Date() };
  componentDidMount() {
    this.updateTime();
  }
  updateTime = () => {
    this.setState({ dateTime: new Date() });
    window.setTimeout(this.updateTime, 1000);
  };
  render() {
    const { dateTime } = this.state;
    const time = dateTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric"
    });
    const [hourMinute, amPm] = time.split(" ");
    const greeting = `${greetingTime(dateTime)}, Elijah`;
    const backgroundImage =
      "https://source.unsplash.com/1600x900/?nature,water";
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover"
        }}
      >
        <header className="App-header">
          <h1 className="App-time">
            <span>{hourMinute}</span> <span>{amPm}</span>
          </h1>
          <h3 className="App-greeting">{greeting}</h3>
        </header>
      </div>
    );
  }
}

export default App;
