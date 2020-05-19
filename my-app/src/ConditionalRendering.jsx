import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

/*In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. */
/*
Conditional rendering in React works the same way conditions work in JavaScript. 
Use JavaScript operators like if or the conditional operator to create elements representing the current state, 
and let React update the UI to match them.

Consider these two components:
*/
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

//We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:
//This example renders a different greeting depending on the value of isLoggedIn prop.
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
/*
Element Variables
You can use elements to store elements.


*/



class ConditionalRendering extends React.Component {
    render() {
        return (
                <div className = "App">
                    {/*Try changinf False/True and see the results*/}
                    <Greeting isLoggedIn={true} />
                </div>
            );

    }
}
export default (ConditionalRendering);