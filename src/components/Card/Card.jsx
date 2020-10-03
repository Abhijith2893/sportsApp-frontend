import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className="soccer-card">
            <img className="soccer-card__logo" src={props.logo} alt={props.name} />
            <h3 className="soccer-card__title">{props.name}</h3>
        </div>
    )
};

export default Card;