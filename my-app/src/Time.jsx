import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

class Time extends React.Component {
state = {
  date: new Date()
  
};

callMe(){
  //function created
  setInterval(()=>{
  //function body
  //update the date every 1 second
    this.setState({ date: new Date() });
  //second argument, update every 1000 ms  
  },1000);
}


    render() {
        return (
        <div className = "App">
        <h1>Vancouver Time</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {this.callMe()}
        <h1>New York City Time</h1>
        <h2>It is {this.state.date.toLocaleTimeString("en-US", {timeZone: "America/New_York"})}.</h2>
        <h1>Austrailia Time</h1>
        <h2>It is {this.state.date.toLocaleTimeString("en-US", {timeZone: "Australia/Brisbane"})}.</h2>
        </div>
        
    
        );

    }
}
export default (Time);