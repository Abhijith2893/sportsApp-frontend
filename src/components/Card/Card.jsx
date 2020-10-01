import React from 'react';

const Card = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <img src={props.logo} alt={props.name} style={{height:'100px'}}/>
        </div>
    )
};

export default Card;