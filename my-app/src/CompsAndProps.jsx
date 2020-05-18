import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

/* Function & Class components

The simplest way to define a component is to write a JavaScript function:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

This function is a valid React component because it accepts a single “props” (which stands for properties) 
object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

*/



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

//it is important to note that props are immutable; they may not be changed once declared but there are clever work around to this,
const element1 = <Welcome name="Daniel" />;
const element2 = <Welcome name="Bob" />;
//declaring constant element names that declare different values for a property is a prime example of this.


//RECAP

/*
1) React calls the Welcome component with {name: 'Sara'} as the props.
2) Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
3) React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.
*/

//Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.
//The following are all commonly expressed as components in React App
/*
    button
    forms
    dialogs
    and much more!
*/
//For example, creating an App component that renders Welcome many times:
function App1() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }


/*
Typically, new React apps have a single App component at the very top. 
However, if you integrate React into an existing app, you might start bottom-up 
with a small component like Button and gradually work your way to the top of the view hierarchy.
*/

//Extracting Components
//Don’t be afraid to split components into smaller components.
//For Example Take a Look  at this Comment component:


/*
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
*/

class CompsAndProps extends React.Component {
    render() {
        return (
            <div className = "App">
                    {element1}
                    {element2}
                    {App1()}
            </div>
        );    
}
}
export default (CompsAndProps);