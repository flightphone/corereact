import React, { Component } from 'react';
import { FetchData } from './components/FetchData';
import './custom.css'
import map from './map.png'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
     <div>
       <div>
         <img src={map} height="400" />
       </div>
        <FetchData/>
      </div>
    );
  }
}
