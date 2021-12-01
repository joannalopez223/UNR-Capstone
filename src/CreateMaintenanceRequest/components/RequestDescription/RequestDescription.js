import './RequestDescription.css';
import PageQuery from '../PageQuery/PageQuery';

function RequestDescription(props) {
    return (
        <PageQuery title="Request Description">

            <form className="request_title">

                <textarea rows="15"></textarea>

            </form>

        </PageQuery>
    );
}

export default RequestDescription;