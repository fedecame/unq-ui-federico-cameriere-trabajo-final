import React from 'react';
import '../styles/spinner.scss';

const Spinner = (props) => {
    return (
        <div className="sk-chase">
            <div className="sk-chase-dot color-lizard"></div>
            <div className="sk-chase-dot color-paper"></div>
            <div className="sk-chase-dot color-scissors"></div>
            <div className="sk-chase-dot color-rock"></div>
            <div className="sk-chase-dot color-spock"></div>
            <div className="sk-chase-dot color-header"></div>
        </div>
    );
}
 
export default Spinner;