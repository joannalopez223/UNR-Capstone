import './RequestTags.css';
import PageQuery from '../PageQuery/PageQuery';

function RequestTags(props) {
    return (

        <PageQuery title="Tags">

            <form className="request_tags">

                <textarea rows="6"></textarea>

            </form>

        </PageQuery>

    );
}

export default RequestTags;