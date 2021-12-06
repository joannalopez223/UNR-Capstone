import styles from './RequestDescription.module.css';
import PageQuery from '../PageQuery/PageQuery';

function RequestDescription(props) {
    return (
        <PageQuery title="Request Description">

            <form>

                <textarea rows="15"></textarea>

            </form>

        </PageQuery>
    );
}

export default RequestDescription;