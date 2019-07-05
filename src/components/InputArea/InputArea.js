import React, {Component} from 'react';
import './InputArea.css';
import InputItem from '../InputItem';

class InputArea extends Component {

    checkInput = (id, value) => {
        this.props.checkInput(id, value);
    };

    render() {
        const {inputs} = this.props;
        const elements = inputs.map(element => {
            const {key, ...elementProps} = element;
            return (
                <div key = {key}>
                    <InputItem {...elementProps} checkInput = {(id, value) => this.checkInput(id, value)}/>
                </div>
            )
        });
        return (
            <div>
                {elements}
            </div>

        );
    }
}

export default InputArea;