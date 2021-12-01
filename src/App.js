import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import MaintenanceRequest from './pages/MaintenanceRequest';
import Appointments from './pages/Appoinments';
import Messages from './pages/Messages';
import Feedback from './pages/Feedback';
import MainHeader from './components/Layout/MainHeader';
import 'react-calendar/dist/Calendar.css';


function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        <Route path='/' exact>
          <Redirect to = '/dashboard' />
        </Route>
      <Route path='/dashboard' exact>
        <Dashboard />
      </Route>
      <Route path='/maintenancerequest' >
        <MaintenanceRequest />
      </Route>
      <Route path='/appointment' >
        <Appointments />
      </Route>
      <Route path='/message' >
        <Messages />
      </Route>
      <Route path='/feedback' >
        <Feedback />
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
