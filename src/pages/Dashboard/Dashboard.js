import React from 'react';
import ActiveRequest from '../../components/ActiveRequest/ActiveRequest';
import Calendar from 'react-calendar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="left_pane">
                <ActiveRequest />
            </div>
            <div className="right_pane">
                <Calendar />
            </div>
        </div>
    );
};

export default Dashboard;
