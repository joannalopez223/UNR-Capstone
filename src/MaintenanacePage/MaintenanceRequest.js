// the Maintennace section

import React from 'react'
import Search from './Search';
import Header from './Header';
import { RequestTable } from './RequestTable';
import QuickFilter from './QuickFilter';
import './MaintenanceRequest.css'



 function MaintenanceRequest() {

        return( 
            <div classname = "MaintenanceRequestSection">
                
                
                <QuickFilter  />
                <RequestTable />
            </div>
            
            )  
    
   
 }

export default MaintenanceRequest; 


//<div className = "pageName"> Your Maintenance Requests  </div>