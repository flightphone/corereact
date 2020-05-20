import React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import arrow_right from '../arrow.png';
import arrow_left from '../arrow-left.png';


export class ShowInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: "",
            curIndex: 0
        };
        this.toggleDialog = this.toggleDialog.bind(this);
        this.setText = this.setText.bind(this);
        this.incIndex = this.incIndex.bind(this);
        this.decIndex = this.decIndex.bind(this);

    }

    incIndex() {
        var ci = this.state.curIndex;
        if (ci < 3) {
            ci++;
            this.setState({ curIndex: ci });
        }
    }

    decIndex() {
        var ci = this.state.curIndex;
        if (ci > 0) {
            ci--;
            this.setState({ curIndex: ci });
        }
    }

    setText(t) {
        this.setState({
            text: t,
            visible: true,
            curIndex: 0
        });
    }

    toggleDialog() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div>
                {this.state.visible &&
                    <Window onClose={this.toggleDialog} title={this.state.text} initialHeight={350} initialWidth={600} >

                        {(this.state.curIndex == 0) && <div>
                            <p>Бюджет</p>
                            <p>Кассовое исполнение</p>
                        </div>
                        }

                        {(this.state.curIndex == 1) && <div>
                            <p>Объекты</p>
                            <p>Показатели</p>
                        </div>
                        }
                        {(this.state.curIndex == 2) && <div>
                            <p>Сроки</p>
                            <p>Процессы</p>
                        </div>
                        }
                        {(this.state.curIndex == 3) && <div>
                            <p>Извещения</p>
                            <p>Контракты</p>
                        </div>
                        }
                        <div className="botpanel" >
                            <button type="button" className="k-button" onClick={this.decIndex}><img src={arrow_left} /></button>
                            <button type="button" className="k-button" onClick={this.incIndex}><img src={arrow_right} /></button>
                        </div>

                    </Window>}
            </div>
        );
    }
}