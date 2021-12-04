import React from 'react'
//import Search from './Search/Search';
import { RequestTable } from './RequestTable/RequestTable';
import QuickFilter from './QuickFilter/QuickFilter';
import './ViewMaintenanceRequest.css';

 function ViewMaintenanceRequest() {

        return( 
            <div classname = "ViewMaintenanceRequestSection">              
                <QuickFilter  />
                <RequestTable />
            </div>        
            )   
 }

export default ViewMaintenanceRequest; 