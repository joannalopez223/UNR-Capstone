import React from 'react'
//import Search from './Search/Search';
import { RequestTable } from './RequestTable/RequestTable';
import QuickFilter from './QuickFilter/QuickFilter';
import styles from './ViewMaintenanceRequest.module.css';

 function ViewMaintenanceRequest() {

    return ( 

        <div className = {styles.ViewMaintenanceRequestSection}>  
        
            <div className={styles.page_title}>
                
                <p>

                    View Maintence Requests

                </p>

            </div>
            <RequestTable />

        </div>     

    )     

 }

export default ViewMaintenanceRequest; 