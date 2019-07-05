import React, {Component} from 'react';

class Submit extends Component {

    render() {
        const {disabled} = this.props.submit;

        this.onSubmitClick = (e) => {
            e.preventDefault();
            this.props.onSubmitClick();
        };

        return (
                <button type="submit" className="btn btn-primary btn-block"
                        disabled={disabled} onClick={this.onSubmitClick}>
                    Отправить
                </button>
        );
    }
}

export default Submit;