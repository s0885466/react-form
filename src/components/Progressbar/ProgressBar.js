import React, {Component} from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {

    render() {
        const style = {
            width: `${this.props.persent}%`
        };

        return (
            <div className="progress mt-5">
                <div className="p-bar" style={style}></div>
            </div>
        );
    }
}

export default ProgressBar;