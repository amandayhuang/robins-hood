import React from 'react'

class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        
        return e => this.setState({[field]:e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createUser(this.state);
        this.setState({first_name:"", last_name:"", email:"", password:""})
    }

    render(){
        return(
            <>
                <div className="signup-container">
                <h1>Make Your Money Move</h1>
                <h3>Robin's Hood lets you invest in people you love/hate, commission-free.</h3>
                <div>{this.props.errors[0]}</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")}/>
                    <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.update("last_name")} />
                    </div>
                    <input type="text" placeholder="Email address" value={this.state.email} onChange={this.update("email")} />
                    <input type="password" placeholder="Password (min. 10 characters)" value={this.state.password} onChange={this.update("password")} />
                    <button>Signup</button>
                </form>
                </div>
            </>
        )
    }

}

export default SignupForm;