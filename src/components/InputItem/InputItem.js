import React, {Component} from 'react';
import './InputItem.css'
class InputItem extends Component {

    changeInput = (e) => {
        const newValue = e.target.value;
        const {id} = this.props;
        this.props.checkInput(id, newValue);
    };

    render() {
        const {label, id, type, placeholder, check, value} = this.props;

        const iconClass = (check === false)
            ? 'far fa-frown'
            : 'far fa-smile';
        return (
            <div className="form-group">
                <i className={`${iconClass} mr-1`}></i>
                <label htmlFor={id}>{label}</label>
                <input type={type} onChange={ this.changeInput } autoComplete={'off'}
                       className="form-control" id={id} placeholder={placeholder}
                value={value}
                />
            </div>
        )
    }
}

export default InputItem;