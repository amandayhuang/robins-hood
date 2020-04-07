import React from 'react'

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser(this.state);
    }

    render() {
        return (
            <>
                <div className='login-container'>
                <div className='login-image'>
                <img src={window.signupURL} alt="abstract green stuff"/>
                </div>
                <div className='login-form'>
                <h1>Welcome to Robin's Hood</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.update("email")} />
                    

                    <label>Password </label>
                    <input type="password" value={this.state.password} onChange={this.update("password")} />
                   
                    <div class='login-error'>{this.props.errors[0]}</div>
                    <button>Sign In</button>
                </form>
                </div>
            </div>
            </>
        )
    }

}

export default LoginForm;