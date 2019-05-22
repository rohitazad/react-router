import React, {Component, Fragment} from 'react';

import { Route, Switch } from "react-router";


import HeaderComponent from '../../Components/Header/index';
import FooterComponent from '../../Components/Footer/index';
import HomeComponent from '../Home/index';

import AboutUsComponent from '../AboutUs/index';
import ContactUsComponent from '../ContactUs/index';



class MainComponent extends Component{

    render(){
        return (
            <Fragment>
                <HeaderComponent />
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path = "/home" component = {HomeComponent} />
                    <Route path = "/about" component = {AboutUsComponent} />
                    <Route path = "/contact" component = {ContactUsComponent} />
                </Switch>
                    
                <FooterComponent/>
            </Fragment>
                
        );
    }

}


export default MainComponent;