import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotoPage from './PhotoPage';
import AccountPage from './AccountPage';
import SettingNav from './SettingNav';
const SettingDashboard = () => {
    return (
        <Grid>
            <Grid.Column width = {12}>
                <Switch>
                <Redirect exact from = '/settings' to = '/settings/basic'/>
                <Route path = '/settings/basic' compoenent = {BasicPage}/>
                <Route path = '/settings/about' compoenent = {AboutPage}/>
                <Route path = '/settings/photos' compoenent = {PhotoPage}/>
                <Route path = '/settings/account' compoenent = {AccountPage}/>

                </Switch>
                
            </Grid.Column>
            <Grid.Column width = {4}>
            <SettingNav />
            </Grid.Column>
        </Grid>
    )
}

export default SettingDashboard
