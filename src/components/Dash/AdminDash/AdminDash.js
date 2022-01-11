/*
  1. This page will call all Admin Components to render admin page
  2. Need: only allow access to users with admin roles via login. 
*/

import React from "react";
import Statistics from "./Statistics/Statistics";
import Feedback from "./Feedback/Feedback";
//import MaintenanceTickets from "./MaintenanceTickets/MaintenanceTickets";

function Dash() {
  return (
    <div>
      <Statistics />
      <Feedback />
      {/*<MaintenanceTickets />*/}
    </div>
  );
}
export default Dash;
