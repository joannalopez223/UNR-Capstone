//app
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './components/Dash/Dash';
import CreateMaintenanceRequest from './components/CreateMaintenaceRequest/CreateMaintenanceRequest';
import ViewMaintenanceRequest from './components/ViewMaintenanceRequest/ViewMaintenanceRequest';
import Feedback from './components/Feedback/FeedbackRequest';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Chatbot from './components/Chatbot/Chatbot';
import styles from './App.module.css';



function App() {
  return (
    <div className={styles.app}>   

      <Header className={styles.header}/> 
      <Navigation className={styles.navigation}/>
      <Chatbot />

      <div className={styles.section}>

        <Switch>
            
            <Route path='/' exact>

              <Redirect to = '/dashboard' />

            </Route>

            <Route path='/dashboard' exact>

            <Dashboard />

            </Route>

            <Route path='/createmaintenancerequest' >

              <CreateMaintenanceRequest />

            </Route>

            <Route path='/viewmaintenancerequest' >

              <ViewMaintenanceRequest />

            </Route>
    
            <Route path='/feedback' >

              <Feedback />

            </Route>

          </Switch>

      </div>
    </div>
  );
}

export default App;
