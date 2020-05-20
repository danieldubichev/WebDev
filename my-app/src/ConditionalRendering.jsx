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
You can use variables to store elements.
This can help you conditionally render a part of the component while the rest of the output doesn’t change.

Consider these two new components representing Logout and Login buttons

*/

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
//In the example below, we will create a stateful component called LoginControl.
//It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:


/* Inline If with logical && operator
You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. 

It can be handy for conditionally including an element:
*/
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
/*
Inline if-else with conditional operator
Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.

In the example below, we use it to conditionally render a small block of text.
<div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
</div>


It can also be used for larger expressions although it is less obvious what’s going on:

<div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
</div>

Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable.
Also remember that whenever conditions become too complex, it might be a good time to extract a component.


*/


//Preventing a component from rendering
/*
In rare cases you might want a component to hide itself even though it was rendered by another component. 
To do this return null instead of its render output.

In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. 
If the value of the prop is false, then the component does not render:

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. 
For instance componentDidUpdate will still be called.
*/
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = {isLoggedIn: false,showWarning: true};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      let mailbox;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
        mailbox = <Mailbox unreadMessages={messages}/>
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
      
        return (
                <div className = "App">
                    {/*Try changing False/True and see the results
                    <Greeting isLoggedIn={true} />
                    */}
                    <div>
                        <Greeting isLoggedIn={isLoggedIn} />
                        {button}
                        <br></br>
                        <div>
                            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                        </div>
                        {/* Mailbox -  Inline If with logical && operator*/}
                        {mailbox}

                        <WarningBanner warn={this.state.showWarning} />
                      <button onClick={this.handleToggleClick}>
                          {this.state.showWarning ? 'Hide' : 'Show'}
                      </button>
                    </div>
                </div>
            );

    }
}
export default (ConditionalRendering);