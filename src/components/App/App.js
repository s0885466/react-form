import React, {Component} from 'react';
import ProgressBar from '../Progressbar';
import InputArea from '../InputArea';
import Submit from '../Submit';
import checkModel from '../../Models/CheckModel';

import './App.css';

export default class App extends Component {
    state = {
        progressBar: {percent: 0},
        submit: {disabled: true},
        textArea: {class: 'hide'},
        inputs: [
            {
                label: 'Email', id: 'email', type: 'text',
                placeholder: '0885466@gmail.com', key: 1, check: false, value: ''
            },
            {
                label: 'Password', id: 'password', type: 'password',
                placeholder: '******', key: 2, check: false, value: ''
            },
            {
                label: 'Address', id: 'address', type: 'text',
                placeholder: 'Гаккелевская 27/2 кв.173', key: 3, check: false, value: ''
            },
            {
                label: 'Phone', id: 'phone', type: 'text',
                placeholder: '8 911 088 54 66', key: 4, check: false, value: ''
            }
        ]
    };

    checkInput = (id, value) => {

        this.setState(({inputs}) => {
            const index = inputs.findIndex(el => el.id === id);
            const newInputs = [...inputs];
            newInputs[index].value = value;
            newInputs[index].check = checkModel[id](value);
            const newPercent = this.changePercent(newInputs);
            const newDisabled = this.changeSubmitDisabled(newPercent);
            return {
                inputs: newInputs,
                submit: {disabled: newDisabled},
                progressBar: {percent: newPercent},
                textArea: {class: 'hide'}
            };
        });

    };

    onSubmitClick = () => {
        this.setState(({inputs}) => {
            const newInputs = [...inputs];
            newInputs.forEach(input => {
                input.value = '';
                input.check = false;
            });
            return {
                progressBar: {percent: 0},
                inputs: newInputs,
                textArea: {class: 'show'}
            }
        });
    };

    changePercent = (inputs) => {
        const len = inputs.length;
        const newPercent = Math.floor(inputs.filter(el => el.check === true).length * 100 / len);
        return newPercent;
    };

    changeSubmitDisabled = (percent) => {
        return percent !== 100;
    };

    render() {
        const {progressBar, inputs, submit, textArea} = this.state;

        return (
            <form>
                <ProgressBar percent={progressBar.percent} addPercent={this.addPercent}/>
                <InputArea inputs={inputs} checkInput={(id, value) => this.checkInput(id, value)}/>
                <Submit submit={submit} onSubmitClick={this.onSubmitClick}/>
                <div className={`text-center ${textArea.class} text-area` }>Форма отправлена, наши менеджеры связжутся с Вами</div>
            </form>
        );
    }
}
