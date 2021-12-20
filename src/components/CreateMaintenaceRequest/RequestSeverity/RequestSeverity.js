import styles from "./RequestSeverity.module.css";
import PageQuery from "../PageQuery/PageQuery";
import StatusButton from "../../StatusButton/StatusButton";

function RequestSeverity(props) {
  return (
    <PageQuery title="Set Severity">
      <div className={styles.request_severity}>
        <div className={styles.container}>
          <StatusButton label="LOW" color="#628db0"></StatusButton>
        </div>
        <div className={styles.container}>
          <StatusButton label="MILD" color="#f59a7a"></StatusButton>
        </div>
        <div className={styles.container}>
          <StatusButton label="HIGH" color="#e17877"></StatusButton>
        </div>
      </div>
    </PageQuery>
  );
}

export default RequestSeverity;
