import styles from './ActiveRequest.module.css';
import StatusButton from '../../StatusButton/StatusButton';

function ActiveRequest(){
    return (
        <div className = {styles.activerequest}>
            <div className= {styles.requesttitle}>
                <p>Faucet Leaking</p>
                <p>Submitted December 1, 2021</p>
            </div>

            <div className= {styles.requestdescription}>
                <p>Issue Description</p>
                <p>I have a faucet leak where it's almost to a constant stream of water when its coming out when I use it. When I close the faucet after I use it, it also leaks constantly.</p>
            </div>

            <div className= {styles.issuetag}>
                <p>Issue Tags</p>
                <div className= {styles.requesttitle}>
                    <StatusButton label="Water" color="#f59a7a"></StatusButton>
                    <StatusButton label="Faucet Leak" color="#f59a7a"></StatusButton>
                </div>
            </div>
        </div>
    );
}

export default ActiveRequest;