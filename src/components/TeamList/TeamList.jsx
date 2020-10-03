import axios from 'axios';
import React, { useEffect, useState } from "react";
import Card from '../../components/Card/Card';
import './TeamList.css';
import Loading from '../../components/Loading/Loading';

const TeamList = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const apiKey = process.env.REACT_APP_ESPN_API_KEY;
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/soccer/all`,{headers:{'x-api-key':apiKey}});
            setState(response.data);
        }
        getData();
    }, []);

    return (
        <>
            {!state.length ? <div><Loading value="Getting EPL team list......" /></div> : 
                <div className='TeamList'>
                    <div className="TeamList-cards">
                        {state.map((team,i) => {
                            return <Card name={team.name} logo={team.logo} key={i}/>
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default TeamList; 