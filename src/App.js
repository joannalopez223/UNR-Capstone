//app
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dash/UserDash/Dash";
//import Dashboard from "./components/Dash/AdminDash/AdminDash";
import CreateMaintenanceRequest from "./components/CreateMaintenaceRequest/CreateMaintenanceRequest";
import ViewMaintenanceRequest from "./components/ViewMaintenanceRequest/ViewMaintenanceRequest";
import Feedback from "./components/Feedback/FeedbackRequest";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
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
