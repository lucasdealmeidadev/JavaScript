import React from 'react';
import './button.css';

function Button(props){

    const {name, onClick} = props;

    return(
        <div>
            <button className="button" onClick={onClick}>{name}</button>
        </div>
    );
}

export default Button;
