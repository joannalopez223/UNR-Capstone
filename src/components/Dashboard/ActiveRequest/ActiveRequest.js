import './ActiveRequest.css';
import StatusButton from '../../StatusButton/StatusButton';

function ActiveRequest(){
    return (
        <div className = 'active-request'>
            <div className="request-title">
                <p>Faucet Leaking</p>
                <p>Submitted October 1, 2021</p>
            </div>

            <div className="request-description">
                <p>Issue Description</p>
                <p>I have a leaky sink faucet where it's almost to a constant stream of water is coming out when I use it. When I close the faucet after I use it, it also leaks constantly.</p>
            </div>

            <div className="issue-tag">
                <p>Issue Tags</p>
                <div className= "tag">
                    <StatusButton label="Water" color="#f59a7a"></StatusButton>
                    <StatusButton label="Faucet Leak" color="#f59a7a"></StatusButton>
                </div>
            </div>
        </div>
    );
}

export default ActiveRequest;