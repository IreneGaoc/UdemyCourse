import React, {Fragment} from 'react'
import { Grid, Menu, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SettingNav = () => {
    return (
          <Fragment>
            <Menu vertical>
              <Header icon="user" attached color="black" content="Profile" />
              <Menu.Item as = {NavLink} to = '/settings/basic'>Basics</Menu.Item>
              <Menu.Item as = {NavLink} to = '/settings/about'>About Me </Menu.Item>
              <Menu.Item as = {NavLink} to = '/settings/photos'>Photos</Menu.Item>
            </Menu>
       
            <Menu vertical>
              <Header
                icon="settings"
                attached
                
                color="black"
                content="Account"
              />
              <Menu.Item as = {NavLink} to = '/settings/account'>My Account</Menu.Item>
            </Menu>
            </Fragment>
    )
}

export default SettingNav
