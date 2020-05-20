import 'bootstrap/dist/css/bootstrap.css';
import '@progress/kendo-theme-default/dist/all.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RussianMap from './components/russian-map';
import MapData from './components/with-regions';
import {ShowInfo} from './components/ShowInfo';

const rootElement = document.getElementById('root');
const showElement = document.getElementById('show');

ReactDOM.render(
    <App />,
  rootElement);

  
  var si = ReactDOM.render(
    <ShowInfo />,
  showElement);  
  

//Загружаем карту
//fetch('./with-regions.json').then(function(response) {
//  response.json().then(function(data) {
      var data = MapData;
      new RussianMap({
          viewPort: data.viewPort,
          mapId: 'russian-map',
          width: 700, //862,
          height: 400, //497,
          // дефолтовые атрибуты для контуров регионов
          defaultAttr: {
              fill: '#d8d8d8', // цвет которым закрашивать
              stroke: '#ffffff', // цвет границы
              'stroke-width': 1, // ширина границы
              'stroke-linejoin': 'round' // скруглять углы
          },
          mouseMoveAttr: {
              fill: '#25669e'
          },
          onMouseMove: function(event) {
              //console.log('mouse on ' + this.region.name + ' (ident: ' + this.region.ident + ')');
          },
          onMouseOut: function(event) {
              //console.log('out on ' + this.region.name + ' (ident: ' + this.region.ident + ')');
          },
          onMouseClick: function(event) {
              //console.log('clicked on ' + this.region.name);
              //alert(this.region.name);
              si.setText(this.region.name);
              
          }
      }, data.regions);
  //});
//});

