import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from '../../components/Card/Card';
import './soccer.css';
import { getApiKey } from '../../utils/api-key';

const SoccerPage = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const apiKey = process.env.REACT_APP_ESPN_API_KEY;
            console.log(apiKey)
            const response = await axios.get('https://mb4o3u3y29.execute-api.us-east-1.amazonaws.com/prod/soccer/all',{headers:{'x-api-key':apiKey}});
            setState(response.data);
        }
        getData();
    }, []);

    return (
        <>
            <h1 className="title">Welcome to soccer page</h1>
            <div style={{display:'flex','flex-wrap':'wrap'}}>
                {state.map((team,i) => {
                    return <Card name={team.name} logo={team.logo} key={i}/>
                })}
            </div>
        </>
    )
}

export default SoccerPage; 