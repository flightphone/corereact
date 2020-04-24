import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(function(forecast) {
            if (forecast.isChecked == null)
              forecast.isChecked = false;
            if (!forecast.isChecked)
            return (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
              <td><input type="checkbox" onChange={
                () => {
                  forecast.isChecked = !forecast.isChecked;
                }
              } /></td>
            </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Тестовое задание</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <button onClick={() => {
          this.setState({forecasts: this.state.forecasts})
        }
        }>OK</button>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}