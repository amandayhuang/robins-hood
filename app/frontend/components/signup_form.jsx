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
        // debugger;
        this.setState({first_name: this.state.first_name, last_name:this.state.last_name, email:this.state.email, password:""})
    }

    render(){
        let errors = []
        if (this.props.errors instanceof Array){
            errors = this.props.errors;
        }
        debugger;
        return(
            
            <>
                <div className='signup-progress'>
                    <img src={window.logoURL}></img>
                    <div> Account</div>
                    <div>Basic Info </div>
                    <div> Identity</div>
                    <div>Funding </div>
                    <div> Submit</div>
                </div>
                <div className="signup-container">
                <h1>Make Your Money Move</h1>
                <h3>Robin's Hood lets you invest in people you love/hate, commission-free.</h3>
                <div className="error">
                 <ul>
                 {
                // this.props.errors[0]
                errors.map((error,index) =>(
                    <li> {errors[index]}</li>
                ))
                }
                </ul>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")}/>
                    <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.update("last_name")} />
                    </div>
                    <input type="text" placeholder="Email address" value={this.state.email} onChange={this.update("email")} />
                    <input type="password" placeholder="Password (min. 10 characters)" value={this.state.password} onChange={this.update("password")} />
                    <button>Sign Up</button>
                </form>
                </div>
            </>
        )
    }

}

export default SignupForm;