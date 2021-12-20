import PageQuery from "../PageQuery/PageQuery";
import UniversalTextbox from "../../UniversalTextbox/UniversalTextbox";

function AdditionalNotes(props) {
  return (
    <PageQuery title="Additional Notes">
      <UniversalTextbox rows="15" />
    </PageQuery>
  );
}

export default AdditionalNotes;
