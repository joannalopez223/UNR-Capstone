import './RequestPriority.css';
import PageQuery from '../PageQuery/PageQuery';
import StatusButton from '../StatusButton/StatusButton'

function RequestPriority(props) {

    return (

        <PageQuery title="Set Priority">

            <div className="request_priority">

                <div className="container">

                    <StatusButton label="NONE" color="#c2c2c2"></StatusButton>

                </div>
                <div className="container">

                    <StatusButton label="LOW" color="#628db0"></StatusButton>

                </div>
                <div className="container">

                    <StatusButton label="MEDIUM" color="#f59a7a"></StatusButton>

                </div>
                <div className="container">

                    <StatusButton label="HIGH" color="#e17877"></StatusButton>

                </div>

            </div>

        </PageQuery>
        
    );
}

export default RequestPriority;