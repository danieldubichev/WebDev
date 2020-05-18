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

//It accepts 'author' (an object)
// 'text' (a string)
// 'date' (a date) all as props
// it describes a comment on a social media website

/*
  This component can be tricky to change because of all the nesting,
  and it it also hard to reuse individual parts of it.
  So, let's extract a few components from it. First, we will extract Avatar:
*/
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
//The Avatar doesnt need to know that it is being rendered inside a comment. This is why we have given its prop a more generic name: user, rather than author
//We recommend naming props from the components own point of view rather than the context in which it is being used

//Next, we will extract a UserInfo componenet that renders an Avatar next to the users name
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function formatDate(date) {
  return date.toLocaleDateString();
}
//This lets us simplify comment to this extent:
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

//extracting components might seem like grunt work at first, but having a palette of reusable componenets pays off in larger apps.
//a good rule of thumb is that if a part of your UI is ised several times (Button, Panel, Avatar),
//or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

const comment = {
  date: new Date(),
  text: 'What a time to be alive',
  author: {
    name: 'JoeBob123',
    avatarUrl: 'https://i.imgflip.com/3dhqb0.jpg',
  },
};

class CompsAndProps extends React.Component {
    render() {
        return (
            <div className = "App">
                    {element1}
                    {element2}
                    {App1()}
                    <Comment
                      date={comment.date}
                      text={comment.text}
                      author={comment.author}
                    />,
            </div>
        );    
}
}
export default (CompsAndProps);