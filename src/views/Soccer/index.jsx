import axios from 'axios';
import React, { useEffect, useState } from "react";
import Card from '../../components/Card/Card';
import './soccer.css';

const SoccerPage = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const apiKey = process.env.REACT_APP_ESPN_API_KEY;
            const response = await axios.get('https://mb4o3u3y29.execute-api.us-east-1.amazonaws.com/prod/soccer/all',{headers:{'x-api-key':apiKey}});
            setState(response.data);
        }
        getData();
    }, []);

    return (
        <div className='SoccerPage'>
            <h1 className="SoccerPage-title">Welcome to soccer page</h1>
            <div className="SoccerPage-cards">
                {state.map((team,i) => {
                    return <Card name={team.name} logo={team.logo} key={i}/>
                })}
            </div>
        </div>
    )
}

export default SoccerPage; 