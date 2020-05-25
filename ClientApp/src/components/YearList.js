import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';

export class YearList extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.props.onChange (event.target.value);
    }

    sports = [ '2020', '2019', '2018', '2017', '2016', '2015', '2014'];

    render() {
        return (
            <DropDownList
                data={this.sports}
                defaultValue = '2019'
                onChange={this.onChange}
            />
        );
    }
}