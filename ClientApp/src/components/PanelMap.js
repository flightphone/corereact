import React, { Component, useState } from 'react';
import {YearList} from './YearList';





export class PanelMap extends Component {
    static displayName = PanelMap.name;
    render() {
        return (
            <div className="toppanel">
            <p>
                <b>Картографическое представление</b>
            </p>    
            <p>
                Исполнение планов&nbsp;&nbsp;&nbsp;&nbsp;Достижение целей
            </p>
            <YearList/>
            </div>

        );
    }

}  