import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');

class Marked extends React.Component {
  constructor(props) {
    super(props);
    this.mdValue = 'Heading\n=======\nSub-heading\n-----------\n### Another deeper heading\nParagraphs are separate\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a line break\nText attributes *italic*, **bold**,`monospace`, ~~strikethrough~~ .\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in Spain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
    this.htmlValue = '';
    // This binding is necessary to make `this` work in the callback
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  makeHtml () {
    var htmlValue = marked(this.mdValue, {sanitize: true});
    return {__html: htmlValue}
  }
  onKeyUp() {
    // console.log('in keyup');
    this.mdValue = document.querySelector('textarea').value;    
    // console.log(this.mdValue);
    this.setState({text: this.mdValue});
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6">
        <textarea 
          onChange={this.onKeyUp} 
          defaultValue={this.mdValue}
          className="form-control form-control-lg" 
          rows="40">
        </textarea>
        </div>

        <div className="col-md-6" >
        <span dangerouslySetInnerHTML={this.makeHtml()}></span>
        </div>
      </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <Marked />
      </div>
    );
  }
}

export default App;
