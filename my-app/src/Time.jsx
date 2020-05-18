import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

class Time extends React.Component {
//properties are immutable so we must create a state
state = {
  //key value pairs, instance specified.
  date: new Date()
  
};

callMe(){
  //function created
  setInterval(()=>{
  //function body
  //update the date every 1 second
  //setState method updates method synchronously with updating the complete DOM. Method figures out previous value and changes value,
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