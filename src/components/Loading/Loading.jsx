import React from 'react';
import './Loading.css';

const Loading = (props) => {
    return(
        <div className="loading">
            <div className="loading__title">
                {props.value}
            </div>
        </div>
    )
}

export default Loading;