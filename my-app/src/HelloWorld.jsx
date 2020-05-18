import React from 'react';
import Ap_Creative_Stock_Header from './Ap_Creative_Stock_Header.jpg';


//Example 1
//We declare a variable called name and then use it inside JSX by wrapping it in curly braces:
/*
const name = 'Daniel Dubichev';
const element = <h1>Hello, {name}</h1>
*/


//Example 2
//We embed the result of calling a JavaScript function, formatName(user), into an <h1> element.

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Jerry',
  lastName: 'Smith',
  avatarURL: Ap_Creative_Stock_Header
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

//Example 3
//JSX is an expression too
/*
After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
*/


function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

//Example 4
//Specifying Attributes with JSX
//You may use quotes to specify string literals as attributes
const element1 = <div tabIndex = "0"><h1>Hello</h1></div>;

//You may also use curly braces to embed a JavaScript expression in an attribute
//regular import reference
const element2 = <img src={Ap_Creative_Stock_Header} alt="Stock1"></img>;
//javascript attribute reference
const element3 = <img src={user.avatarURL} alt="Stock2"></img>;



//Example 5
//Specifying children with JSX
//If a tag is empty, you may close it immediately with />, like XML:

const unusedElement = <img src={Ap_Creative_Stock_Header} alt="Stock1"/>;

//JSX tags may contain children:
const interesting = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

//Example 6
//JSX Represents objects
//The Following are Identical!

/*
const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
*/


// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
// Note: this structure is simplified
const element4 = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };


  

class HelloWorld extends React.Component {
render() { 
    return (
        <div>
            {/* example 2 */}
            {element}
            {/* example 3 */}
            {getGreeting(user)}
            {getGreeting()}
            {/* example 4 */}
            {element1}
            {element2}
            <br></br>
            {element3}
            {/* example 5 */}
            {interesting}
            {/* example 6  - requires some work with props! We will dive into this section later!*/}
            

        </div>
    );
    }
}

export default (HelloWorld);