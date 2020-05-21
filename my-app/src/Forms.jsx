import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

//HTML form elements work a little bit differently from other DOM elements in React,
//because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
/*

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

*/


/*
This form has the default HTML form behavior of browsing to a new page when the user submits the form.

If you want this behavior in React, it just works. But in most cases, 
it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.

The standard way to achieve this is with a technique called “controlled components”.
*/
//Controlled Components
/*
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. 
In React, 

!!!mutable state is typically kept in the state property of components, and only updated with setState().!!!

We can combine the two by making the React state be the “single source of truth”. 

Then the React component that renders a form also controls what happens in that form on subsequent user input. 
An input form element whose value is controlled by React in this way is called a “controlled component”.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component

Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. 
Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.

With a controlled component, the input’s value is always driven by the React state. 
While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.

*/

//The Textarea Tag
//In HTML, a <textarea> element defines its text by its children:

/*
<textarea>
  Hello there, this is some text in a text area
</textarea>

In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input:
Notice that this.state.essayvalue is initialized in the constructor, so that the text area starts off with some text in it.
*/

//The Select Tag
//In HTML, <select creates a drop-down list.>
//For example, this HTML creates a drop-down list of flavors:
/*
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
*/

//Note that the Coconut option is initially selected, because of the selected attribute. 

//React, instead of using this selected attribute, uses a value attribute on the root select tag. 

//This is more convenient in a controlled component because you only need to update it in one place. For example: refer to the flavor value in the constructor.

//Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - 
//they all accept a value attribute that you can use to implement a controlled component.

//You can also pass an array into thge value attribute, allowing you to select multiple options in a select tag:
/*
<select multiple={true} value={['B', 'C']}>
*/

//File input tag
/*
In HTML, an <input type="file"> lets the user choose one or more files 
from their device storage to be uploaded to a server or manipulated by JavaScript via the File API.

<input type="file" />

Because the value is read only, it is an uncontrolled component in React. It is discussed together with other uncontrolled components alter in the documentation.
*/
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      essayvalue : 'Please write an essay about your favorite DOM element.',
                      flavor: 'coconut'

                        };
    
        this.handleChange = this.handleChange.bind(this);

        this.handleChange2 = this.handleChange2.bind(this);

        this.handleChange3 = this.handleChange3.bind(this);

        this.handleSubmitName = this.handleSubmitName.bind(this);

        this.handleSubmitEssay = this.handleSubmitEssay.bind(this);

        this.handleSubmitFlavor = this.handleSubmitFlavor.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChange2(event) {
        this.setState({essayvalue: event.target.value});
      }
      handleChange3(event) {
        this.setState({flavor: event.target.value});
      }
      handleSubmitName(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      handleSubmitEssay(event) {
        alert('An essay was submitted: ' + this.state.essayvalue);
        event.preventDefault();
      }
      handleSubmitFlavor(event) {
        alert('Your favorite flavor is: ' + this.state.flavor);
        event.preventDefault();
      }

    render() {
        return (
                <div className = "App">
                   <form onSubmit={this.handleSubmitName}>
                        <label>
                            Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                </form>
                <br></br>
                <form onSubmit={this.handleSubmitEssay}>
                    <label>
                        Essay:
                    <textarea value={this.state.essayvalue} onChange={this.handleChange2} />
                    </label>
                    <input type="submit" essayvalue="Submit" />
                </form>
                <form onSubmit={this.handleSubmitFlavor}>
                <label>
                    Pick your favorite flavor:
                                <select value={this.state.flavor} onChange={this.handleChange3}>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                </label>
                <input type="submit" flavor="Submit" />
                </form>
                </div>
            );
    }
}
export default (Forms);