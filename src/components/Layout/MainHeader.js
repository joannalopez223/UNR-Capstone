import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to = '/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to = '/maintenancerequest'>Maintenance Requests</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to = '/appointment'>Appoinments</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to = '/message'>Messages</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to = '/feedback'>Feedback</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default MainHeader;