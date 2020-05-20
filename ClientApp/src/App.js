import React, { Component } from 'react';
import { FetchData } from './components/FetchData';
import './custom.css'




export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div style={{padding:"10px", position:"relative"}}>
      <p align="center">  
        <div id="russian-map"></div>
      </p>  
        <FetchData />
      </div>
    );
  }
}
