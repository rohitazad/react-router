import React, {Component, Fragment} from 'react';

import { Route, Switch } from "react-router";


import HeaderComponent from '../../Components/Header/index';
import FooterComponent from '../../Components/Footer/index';
import HomeComponent from '../Home/index';

import AboutUsComponent from '../AboutUs/index';
import ContactUsComponent from '../ContactUs/index';

import GitUserComponent from '../GitHubUser/User/user'
import HackerNewsComponents from '../HackerNews/HackerNewsComponent';


class MainComponent extends Component{

    

    render(){
        return (
            <Fragment>
                <HeaderComponent />
                <div className="bodyContent">
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route path = "/home" component = {HomeComponent} />
                        <Route path = "/about" component = {AboutUsComponent} />
                        <Route path = "/contact" component = {ContactUsComponent} />
                        <Route path = "/git-user" component = {GitUserComponent} />
                        <Route path = "/hacker-news" component = {HackerNewsComponents} />
                    </Switch>
                </div>
                <FooterComponent/>
            </Fragment>
                
        );
    }

}


export default MainComponent;