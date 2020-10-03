import React from "react";
import TeamList from '../../components/TeamList/TeamList';
import './index.css';

const SoccerPage = () => {
    return (
        <div className='SoccerPage'>
            <h1 className="SoccerPage-title">Welcome to soccer page</h1>
            <div className="SoccerPage-teamList">
                <TeamList />
            </div>
        </div>
    )
}

export default SoccerPage; 