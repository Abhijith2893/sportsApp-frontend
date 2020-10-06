import axios from 'axios';
import React, { useEffect, useState } from "react";
import Loading from '../../components/Loading/Loading';
import './LeagueTable.css';

const LeagueTable = () => {
    const [state,setState] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const apiKey = process.env.REACT_APP_ESPN_API_KEY;
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/soccer/standings`,{headers:{'x-api-key':apiKey}});
            setState(response.data);
        }
        getData();
    },[]);
    console.log(state)
    return(
        <div className="league-table">
            {!state.length ? 
                <Loading value="Getting EPL standings......" /> : 
                <div className="league-table__table">
                        {state.map((team,i) => {
                            return(
                                <div className="flex-table league-table__table__row" key={i}>
                                    <div className="league-table__table__row__cell league-table__table__row__cell--name">
                                        {team.name}
                                    </div>
                                    <div className="league-table__table__row__cell">
                                        {team.played}
                                    </div>
                                    <div className="league-table__table__row__cell">
                                        {team.win}
                                    </div>
                                    <div className="league-table__table__row__cell">
                                        {team.loss}
                                    </div>
                                    <div className="league-table__table__row__cell">
                                        {team.draw}
                                    </div>
                                    <div className="league-table__table__row__cell">
                                        {team.points}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            }
        </div>
    )
};

export default LeagueTable;