import React, {Component} from 'react';
import axios from 'axios';

import  GitUserForm from '../User/Form';
import UserDetailsComponent from './UserDetails';
import { reject } from 'q';

class GitUserComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            userName: 'Rohit Azad Malik',
            userData: null,
        }
    }
    componentWillMount(){
        
    }

    getUser = (e)=>{
        e.preventDefault();
        console.log(e);
        console.log(e.target.elements.username.value);

        const user = e.target.elements.username.value;
        if (user) {
            axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
                const data = res.data;
                console.log(data);
                this.setState(prev =>{
                    return {
                        gitHubUserData:{data}
                    }
                });
            })
            .catch(e =>{
                //this.fallBackError(e);
                this.setState(prev =>{
                    return {
                        gitHubUserData: null
                    }
                })
                console.log(e);
                console.log('then error for git hub',e.message);
                console.log(e.data);
                reject(e);
            })
        } else return;
    }

    render(){
        //console.log(this.state.gitHubUserData);
        let gitUserData = this.state.gitHubUserData;
        return(
            <div className="gitUser">
                <GitUserForm getUser={this.getUser} />
                {
                    gitUserData = 
                    gitUserData ? 
                    <UserDetailsComponent  userData={gitUserData}/> : 
                    <div className="noData">No data found</div>
                }
                
            </div>
        );
    }
}

export default GitUserComponent;