import React, {Component} from 'react';


class GitUserForm extends Component{
    
    render(props){
        return (
            <form onSubmit={this.props.getUser}>
                <input type="text" placeholder="Enter Git Hub User name" name="username" />
                <button>Submit</button>
            </form>
        )
    }
}

export default GitUserForm;