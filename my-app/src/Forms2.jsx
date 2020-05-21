import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

//Controlled Input Null Value
/*
Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. 
If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);

*/

//Handling Multiple Inputs
/*
When you need to handle multiple controlled input elements, 
you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

*/


class Forms2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
                <div className = "App">
                   <form>
                        <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                                Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                        </label>
                    </form>
                </div>
            );
    }
}
export default (Forms2);