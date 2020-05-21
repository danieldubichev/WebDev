import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';


//First, review on how you transform lists in JavaScript.

/*
Given the code below, we use the map() function to take an array of numbers and double their values. 
We assign the new array returned by map() to the variable doubled and log it:
*/

/*
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
*/

/*
This code logs [2, 4, 6, 8, 10] to the console.

In React, transforming arrays into lists of elements is nearly identical.
*/

//Rendering Multiple Componenents
/*
You can build collections of elements and include them in JSX using curly braces {}

Below, we loop through the numbers array using the JavaScript map() function.
We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems:
*/

//EXAMPLE 1

//const numbers = [1, 2, 3, 4, 5];
//const listItems = numbers.map((number) =>
//      <li>{number}</li>
//    );

//Basic List Component
/*
Usually you would render lists inside a component.
We can refactor the previous example into a component that accepts an array of numbers and outputs a list of elements.
*/

//EXAMPLE 2

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

const numbers = [1, 2, 3, 4, 5];
/*
When you run this code, you’ll be given a warning that a key should be provided for list items. 

A “key” is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section.

Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.

*/

//Keys 
/*
Keys Help Identify which items have changed are added or removed, keys should be given to the element inside the array to give the elements a stable identity
*/
function NumberList2(props) {
    const numbers2 = props.numbers2;
    const listItems2 = numbers2.map((number) =>
    //example of a key given to the element inside the array to give the elements a stable identity.
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems2}</ul>
    );
  }
  const numbers2 = [6, 7, 8, 9, 10];  

  //Keys Continued
  /*
    The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. 
    Most often you would use IDs from your data as keys:

    const todoItems = todos.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    );

    When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

    const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
        <li key={index}>
            {todo.text}
        </li>
    );


  */

  //Extracting Components with keys.
  /*
  Keys only make sense in the context of the surrounding array.

  For example, 
  
  if you extract a ListItem component, 
  you should keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself.

  Example: Incorrect Key Usage

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

  Example: Correct Key Usage

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );

  */


//                                                                      Blog Example!
//Keys Must Only Be Unique Among Siblings
/*
Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. 

We can use the same keys when we produce two different arrays:


*/
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {/*sidebar*/}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

//Keys dont get passed to components, if you need a key accessed in your component, then pass it explicitly as a prop with a different name:
/*
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
*/

//With the example above, the Post component can read props.id, but not props.key.



//Emebedding map() in JSX
//in the examples above we declared a separate listItems variable and included it in JSX:
/*
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
*/

//JSX allows embedding any expression in curly braces so we could inline the map() result:

/*
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
*/

//Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, 
//it is up to you to decide whether it is worth extracting a variable for readability. 
//Keep in mind that if the map() body is too nested, it might be a good time to extract a component.

class ListsAndKeys extends React.Component {
      render() {
          return (
                  <div>
                      {/* FOR EXAMPLE 1
                      <ul>{listItems}</ul>,*/}
                      <NumberList numbers={numbers} />,
                      <NumberList2 numbers2={numbers2} />,
                      
                      <div className = "App">
                      <Blog posts={posts} />,
                      </div>
                  </div>
              );
      }
  }
  export default (ListsAndKeys);