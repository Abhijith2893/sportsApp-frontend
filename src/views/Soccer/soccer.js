import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from '../../components/Card';
import './soccer.css';

const SoccerPage = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const response = await axios.get('https://mb4o3u3y29.execute-api.us-east-1.amazonaws.com/prod/soccer/all');
            setState(response.data);
        }
        getData();
    }, []);

    return (
        <>
            <h1 className="title">Welcome to soccer page</h1>
            <div>
                {state.map((team,i) => {
                    return <Card name={team.name} logo={team.logo} key={i}/>
                })}
            </div>
        </>
    )
}

export default SoccerPage; 