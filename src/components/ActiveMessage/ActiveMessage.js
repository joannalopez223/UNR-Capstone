import styles from './ActiveMessage.module.css';
import StatusButton from '../../StatusButton/StatusButton';
import PostWigget from '../../Widget/PostWidget/PostWidget';

function ActiveMessage(){
    return (
    
        <div className = {styles.activemessage}>
            <div className = "header">
                    <div>
                        <PostWigget />
                    </div>
                    <div className = {styles.title}>
                        <p>Facility</p>
                    </div>
            </div>
           
        <div className = {styles.messagedescription}>
            <p>To ensure the safety of our community over the break, all rooms will be checked to verify the above list has been completed. Room inspections will also be conducted by our Facilities team to ensure health, safety, and security; as well as changing air filters, checking drains, inspecting the cleanliness of bathroom, etc.</p>
        </div>

        <div className= {styles.footer}>
            <StatusButton label= "Reply Now" color="#d62013"></StatusButton>
        </div>
    </div>

    );
};
export default ActiveMessage;
