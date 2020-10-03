import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className="SoccerCard">
            <h3 className="SoccerCard-title">{props.name}</h3>
            <img className="SoccerCard-logo" src={props.logo} alt={props.name} />
        </div>
    )
};

export default Card;