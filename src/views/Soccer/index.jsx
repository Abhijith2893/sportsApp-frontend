import React from "react";
import LeagueTable from '../../components/LeagueTable/LeagueTable';
import TeamList from '../../components/TeamList/TeamList';
import './index.css';

const SoccerPage = () => {
    return (
        <div className='soccer-page'>
            <h1 className="soccer-page__title">Welcome to soccer page</h1>
            <div className="soccer-page__details">
                <TeamList />
                <LeagueTable />
            </div>
        </div>
    )
}

export default SoccerPage; 