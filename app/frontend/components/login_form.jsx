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
                <h1>Welcome to Robin's Hood</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                    <input type="text" value={this.state.email} onChange={this.update("email")} />
                    </label>

                    <label>Password
                    <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>
                    
                    <button>Sign In</button>
                </form>
                
            </>
        )
    }

}

export default LoginForm;