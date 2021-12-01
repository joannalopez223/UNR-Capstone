import './RequestTitle.css';
import PageQuery from '../PageQuery/PageQuery';

function RequestTitle(props) {
    return (

        <PageQuery title="Request Title">

            <form className="request_title">

                <textarea></textarea>

            </form>

        </PageQuery>
        
    );
}

export default RequestTitle;