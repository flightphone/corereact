import React, { Component, useState } from 'react';
import {YearList} from './YearList';





export class PanelMap extends Component {
    static displayName = PanelMap.name;

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value){
        this.props.onChange (value);
    }

    render() {
        return (
            <div className="toppanel">
            <p>
                <b>Картографическое представление</b>
            </p>    
            <p>
                Исполнение планов&nbsp;&nbsp;&nbsp;&nbsp;Достижение целей
            </p>
            <YearList  onChange={this.onChange}/>
            </div>

        );
    }

}  