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

  static renderForecastsTable(forecasts, obj) {
    return (
      <table className='table table-dark table-bordered table-hover table-sm' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <td rowSpan='2' align="right" valign="bottom">По состоянию на 31.03.2019</td>
            <td colSpan='2' align="right">Показатели</td>
            <td colSpan='2' align="right">Бюджет</td>
            <td colSpan='2' align="right">Контрактация</td>
            <td colSpan='2' align="right">Сроки</td>
            <td rowSpan='2'></td>
          </tr>
          <tr>
            <td>План</td>
            <td>Факт</td>
            <td>План</td>
            <td>Факт</td>
            <td>План</td>
            <td>Факт</td>
            <td>План</td>
            <td>Факт</td>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(function (forecast) {
            if (forecast.isChecked == null)
              forecast.isChecked = false;
            var btclass = "icon-redo";
            if (forecast.isChecked == true)
              btclass = "icon-undo";
            return (
              <React.Fragment>
                <tr key={forecast.id}>
                  <td>{forecast.id}&nbsp;&nbsp;&nbsp;&nbsp;{forecast.name}</td>
                  <td>План</td>
                  <td>Факт</td>
                  <td>План</td>
                  <td>Факт</td>
                  <td>План</td>
                  <td>Факт</td>
                  <td>План</td>
                  <td>Факт</td>
                  <td>
                    <span class={btclass} style={{ cursor: "pointer" }}

                      onClick={
                        () => {
                          forecast.isChecked = !forecast.isChecked;
                          obj.setState({ forecasts: forecasts });
                        }}

                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </td>
                </tr>
                {

                  forecast.areas.map(function (area) {
                    let fclass = "flag";
                    if (area.flag)
                      fclass = fclass + " " + area.flag;

                    if (forecast.isChecked == true)
                      return (
                        <tr key={area.aoguid}>
                          <td>

                            <a href="#" class={fclass}>{area.name}</a>
                          </td>
                          <td>План</td>
                          <td>Факт</td>
                          <td>План</td>
                          <td>Факт</td>
                          <td>План</td>
                          <td>Факт</td>
                          <td>План</td>
                          <td>Факт</td>
                          <td></td>
                        </tr>
                      );
                  })
                }
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts, this);

    return (
      <div>
        Рейтинг исполнения планов
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data.data, loading: false });
  }
}
