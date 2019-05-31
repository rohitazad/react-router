import React, {Component} from 'react';

class UserDetailsComponent extends Component{
    render(props){
        console.log('child render2', this.props.userData.data)
        let userData = this.props.userData.data;

        const userName = userData.name ? <h5 className="card-title">{userData.name}</h5> : '';
        const userLocation = userData.location ? <p className="card-text">Location :- {userData.location}</p> : '';
        const userUrl = userData.url ? <p className="card-text">URL Is :- {userData.url}</p> : '';

        return (
            <div className="userSec">
                <div className="card fixWidth">
                    <img  src={userData.avatar_url} alt={userData.login} title={userData.name} />
                    <div className="card-body">
                        {userName}
                        {userUrl}
                        {userLocation}
                    </div>
                </div>

                
                
               
            </div>
        )
    }
}

export default UserDetailsComponent;