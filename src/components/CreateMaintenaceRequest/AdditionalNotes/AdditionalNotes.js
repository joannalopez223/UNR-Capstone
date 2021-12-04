import './AdditionalNotes.css';
import PageQuery from '../PageQuery/PageQuery';

function AdditionalNotes(props) {
    return (

        <PageQuery title="Additional Notes">

            <form className="additional_notes">

                <textarea rows="15"></textarea>

            </form>

        </PageQuery>

    );
}

export default AdditionalNotes;