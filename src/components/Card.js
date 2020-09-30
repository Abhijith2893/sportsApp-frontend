import React from 'react';

const Card = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <div>{props.logo}</div>
        </div>
    )
};

export default Card;