import PageQuery from "../PageQuery/PageQuery";
import Textbox from "../../Textbox/Textbox";

function AdditionalNotes(props) {
  return (
    <PageQuery title="Additional Notes">
      <Textbox rows="15" />
    </PageQuery>
  );
}

export default AdditionalNotes;
