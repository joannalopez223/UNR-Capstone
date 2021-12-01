import React, { Component } from 'react';
import './CreateMaintenceRequest.css'
import RequestDate from './components/RequestDate/RequestDate';
import RequestTitle from './components/RequestTitle/RequestTitle';
import RequestDescription from './components/RequestDescription/RequestDescription';
import RequestSeverity from './components/RequestSeverity/RequestSeverity';
import RequestBuilding from './components/RequestBuilding/RequestBuilding';
import RequestMedia from './components/RequestMedia/RequestMedia';
import RequestPriority from './components/RequestPriority/RequestPriority'
import DamageLocation from './components/DamageLocation/DamageLocation'
import AdditionalNotes from './components/AdditionalNotes/AdditionalNotes'
import RequestTags from './components/RequestTags/RequestTags'

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