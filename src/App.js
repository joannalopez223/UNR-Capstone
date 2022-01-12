//user app
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/UserDash/UserDash";
import Navigation from "./components/Navigation/UserNav/Navigation";
/*
1. Will need to structure App.js to login 
  a. Will need to differentiate between user and admin pages via database.
  b. Can be configured when logging into app - will render app pages specific to role ie user or admin.
*/
//import Dashboard from "./components/Dashboard/AdminDash/AdminDash"; //test out admin page dashboard
//import Navigation from "./components//Navigation/AdminNav/Navigation"; //test out admin nav side bar
import CreateMaintenanceRequest from "./components/CreateMaintenaceRequest/CreateMaintenanceRequest";
import ViewMaintenanceRequest from "./components/ViewMaintenanceRequest/ViewMaintenanceRequest";
import Feedback from "./components/Feedback/FeedbackRequest";
import Header from "./components/Header/Header";
import Chatbot from "./components/Chatbot/Chatbot";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <Navigation className={styles.navigation} />
      <Chatbot />

      <div className={styles.section}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/createmaintenancerequest"
            element={<CreateMaintenanceRequest />}
          />

          <Route
            path="/viewmaintenancerequest"
            element={<ViewMaintenanceRequest />}
          />

          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
