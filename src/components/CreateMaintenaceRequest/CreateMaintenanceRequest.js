import React, { Component } from 'react';
import './CreateMaintenanceRequest.css';
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

        return <div className="create_maintenance_request">

            <div className="left_pane">

                <div className="page_title">
            
                    <p>

                        Submit a Maintence Request

                    </p>

                </div>


                <RequestTitle></RequestTitle>
                <RequestDescription></RequestDescription>
                <RequestSeverity></RequestSeverity>
                <RequestBuilding></RequestBuilding>
                

            </div>
            <div className="right_pane">

                <RequestMedia></RequestMedia>
                <RequestPriority></RequestPriority>
                <AdditionalNotes></AdditionalNotes>
                <RequestTags></RequestTags>

            </div>

        </div>

    }

}

export default CreateMaintenceRequest;