import './ActiveMessage.css';
import StatusButton from '../../StatusButton/StatusButton';
import PostWigget from '../../Widget/PostWidget/PostWidget';

function ActiveMessage(){
    return (
    
        <div className = "active-message">
            <div className = "header">
                    <div className = "icon">
                        <PostWigget />
                    </div>
                    <div className = "title">
                        <p>Facility</p>
                    </div>
            </div>
           
        <div className = "message-description">
            <p>To ensure the safety of our community over the break, all rooms will be checked to verify the above list has been completed. Room inspections will also be conducted by our Facilities team to ensure health, safety, and security; as well as changing air filters, checking drains, inspecting the cleanliness of bathroom, etc.</p>
        </div>

        <div className="footer">
            <StatusButton label= "Reply Now" color="#d62013"></StatusButton>
        </div>
    </div>

    );
};
export default ActiveMessage;