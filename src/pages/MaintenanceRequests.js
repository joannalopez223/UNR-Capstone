// the Maintennace section

import React from 'react'
import { RequestTable } from '../components/RequestTable';
import QuickFilter from '../components/QuickFilter';
import './MaintenanceRequests.css'



 function MaintenanceRequests() {

        return( 
            <div classname = "MaintenanceRequestSection">   
                <QuickFilter  />
                <RequestTable />
            </div>
            
            )  
    
   
 }

export default MaintenanceRequests; 


