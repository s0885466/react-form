import React, {Component} from 'react';
import './ProgressBar.css';


export default class ProgressBar extends Component {

    render() {

        const {percent} = this.props;
        const style = {
            width: `${percent}%`
        };

        return (
            <div className="progress mt-5 mb-5">
                <div className="p-bar" style={style}></div>
            </div>
        );
    }
}
