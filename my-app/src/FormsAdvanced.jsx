import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';
/* Default Values
In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, 

you often want React to specify the initial value, but leave subsequent updates uncontrolled. 

To handle this case, you can specify a defaultValue attribute instead of value.

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.
*/

class FormsAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
      }
      handleSubmit(event) {
        event.preventDefault();
        alert(
          `Selected file - ${this.fileInput.current.files[0].name}`
        );
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Upload file:
              <input type="file" ref={this.fileInput} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
    
export default (FormsAdvanced);