import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

/*
Consider the ticking clock example from one of the previous sections. 
In Rendering Elements, we have only learned one way to update the UI. 
We call ReactDOM.render() to change the rendered output:

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
*/
//instead we will add a local state to the class so it can render itself only and note the entire DOM.

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}



class StateAndLifeCycle extends React.Component {
    //class constructor which assigns the initial this.state
    constructor(props){
        //pass props to the base constructor
        super(props);
        this.state = {
            date: new Date()

        };
    }
    //we also want to set up a timer whenever the clock is rendered to the DOM for the first time.
    //this is called "mounting" in react.
    //we also want to clear that timer whenever the DOM produced bu the clock is removed. This is called "unmounting"
    //we can declare special methods on the componenet calss to run some code when a component mounts and unmounts:
    
    
    //these methods are called "lifecycle methods"

    //methods runs after the component output has been rendered to the DOM
    //good place to set up timer.
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //notice how we save the timer ID right on this (this.timerID)
    //While this.props is set up by react itself, and this.state has a special meaning,
    //you are free to add additional fields to a class manually if you need to store something that doesnt participate in the date flow, like timerID
  
    //we tear down the timer here.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }
    //recap of what is going on here
    /*
    When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. 
    Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.


    React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. 
    React then updates the DOM to match the Clock’s render output.

    When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. 
    Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

    Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. 
    Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. 
    This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

    If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
    */
   //using state correctly
   //3 major concepts
   //1
   //do not modify state directly
   //for example, this will not re-render a component!

   //this.state.comment = 'Hello';

   //instead, use setState():

   //this.setState({comment: 'Hello'});

   //the only time when you can assign this.state is the constuctor

   //2
   //state updates may be asynchronous
   //react may batch multiple setState() calls into a single update for performance.
   //Because this.props and this.state may be updated asynchronously, you should not
   //rely on their values for calculating the next state

   //per example. this code may fail to update the counter
   //wrong
   
   //this.setState({counter: this.state.counter + this.props.increment,});
  
//To fix it, use a second form of setState() that accepts a function rather than an object. 
//That function will receive the previous state as the first argument, 
//and the props at the time the update is applied as the second argument:

/*
this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
*/

//this is an example of an arrow function, however, it also works wit regular functions:
/*
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});

*/
//3
//State updates are merged
//When you call setState(), React merges the object you provide into the current state.
//For example, your state may contain several independent variables:
/*
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
*/
//Then you can update them independently with seperate setState() calls:
/*
componentDidMount() {
fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
}
The merging is shallow, so this.setState({comments}) leaves this.state.posts intact,
but completely replaces this.state.comments
*/


/*
The Data flows down;
Neither parent nor child components can know if a certain component is stateful or stateless, 
and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
This also works for user-defined components:
<FormattedDate date={this.state.date} />

The FormattedDate component would receive the date in its props and wouldn’t know whether it came from the Clock’s state, 
from the Clock’s props, or was typed by hand:
FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, 
and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

To show that all components are truly isolated, we can create an App component that renders three <Clock>s
*/


    render() {
        return (
            <div className = "App">
                <h1> Hello World! </h1>
                <FormattedDate date={this.state.date} />
            </div>
        );    
}
}
export default (StateAndLifeCycle);