import PageQuery from "../PageQuery/PageQuery";
import Textbox from "../../Textbox/Textbox";

function RequestDescription(props) {
  return (
    <PageQuery title="Request Description">
      <Textbox rows="15" />
    </PageQuery>
  );
}

export default RequestDescription;
