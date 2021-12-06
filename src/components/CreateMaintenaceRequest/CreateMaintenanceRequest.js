import React, { Component } from 'react';
import styles from './CreateMaintenanceRequest.module.css';
import RequestTitle from './RequestTitle/RequestTitle';
import RequestDescription from './RequestDescription/RequestDescription';
import RequestSeverity from './RequestSeverity/RequestSeverity';
import RequestBuilding from './RequestBuilding/RequestBuilding';
import RequestMedia from './RequestMedia/RequestMedia';
import RequestPriority from './RequestPriority/RequestPriority';
import AdditionalNotes from './AdditionalNotes/AdditionalNotes';
import RequestTags from './RequestTags/RequestTags';

class CreateMaintenceRequest extends Component {

    render() {

        return <div className={styles.create_maintenance_request}>

            <div className={styles.page_title}>
                
                <p>

                    Submit Maintence Request

                </p>

            </div>

            <div className={styles.content}>

                <div className={styles.left_pane}>

                    <RequestTitle></RequestTitle>
                    <RequestDescription></RequestDescription>
                    <RequestSeverity></RequestSeverity>
                    <RequestBuilding></RequestBuilding>
                    
                </div>

                <div className={styles.right_pane}>

                    <RequestMedia></RequestMedia>
                    <RequestPriority></RequestPriority>
                    <AdditionalNotes></AdditionalNotes>
                    <RequestTags></RequestTags>

                </div>

            </div>

        </div>

    }

}

export default CreateMaintenceRequest;