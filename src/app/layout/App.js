import React,{Component, Fragment} from 'react';
import {Button, Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';

class App extends Component {
  render() {
    return (
      
        <Fragment>

        <Route exact path = '/' component = {HomePage} />
        <Route path = '/(.+)' render = {()=>(
          <Fragment>
          <NavBar />
          <Container className = "main">
        <Route path = '/events' component = {EventDashboard} />
        <Route path = '/events/:id' component = {EventDetailedPage} />
        <Route path = '/people' component = {PeopleDashboard} />
        <Route path = '/profile/:id' component = {UserDetailedPage} />
        <Route path = '/settings' component = {SettingDashboard} />
        <Route path = '/createEvent' component = {EventForm} />
        </Container>
        </Fragment>
        )} />
        </Fragment>
      
      
      
    );
  }
  
}

export default App;
