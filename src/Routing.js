import React from 'react';
import {Route , Switch} from 'react-router-dom'
import SignUp from './SignUp';
import LandingPage from './LandingPage'
import SettingPage from './SettingPage'
import ClientPage from './ClientPage.js'
import DisplayClock from './DisplayClock'
import ShowError from './ShowError';


const Routing=()=>{
    return(
        <>
        <Switch>
            <Route exact path="/"  component={SignUp}  />
            <Route  path="/Landing"  component={LandingPage}  />
            <Route  path="/Setting"  component={SettingPage}  />
            <Route  path="/Client"  component={ClientPage}  />
            <Route  path="/Display"  component={DisplayClock}  />
            <Route  component={ShowError}  />
        </Switch>
        </>
    )
}

export default Routing;