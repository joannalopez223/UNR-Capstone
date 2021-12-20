import PageQuery from "../PageQuery/PageQuery";
import UniversalTextbox from "../../UniversalTextbox/UniversalTextbox";

function RequestDescription(props) {
  return (
    <PageQuery title="Request Description">
      <UniversalTextbox rows="15" />
    </PageQuery>
  );
}

export default RequestDescription;
