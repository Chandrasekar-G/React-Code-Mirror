import React, { Component } from 'react';
import './App.css';
import  CodeMirrorWrapper  from "./container/CodeMirrorWrapper";
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class App extends Component {

  render() {
    return (
      <CodeMirrorWrapper></CodeMirrorWrapper>
    );
  }
}

export default App;