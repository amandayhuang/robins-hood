import React from 'react'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field){
        
        return e => this.setState({[field]:e.currentTarget.value})
    }

    componentDidUpdate(){
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmail = emailPattern.test(this.state.email);
        const email = ReactDOM.findDOMNode(this.refs.email);
        const emailInput = ReactDOM.findDOMNode(this.refs.emailInput);
        const password = ReactDOM.findDOMNode(this.refs.password);
        const passwordInput = ReactDOM.findDOMNode(this.refs.passwordInput);

        if (this.state.email.length > 0 && isEmail === false) {
            email.classList.add('active');
            emailInput.classList.add('red-border');
        }else{
            email.classList.remove('active');
            emailInput.classList.remove('red-border');
        }

        if (this.state.password.length > 0 && this.state.password.length  < 10){
            password.classList.add('active');
            passwordInput.classList.add('red-border');
        }else{
            password.classList.remove('active');
            passwordInput.classList.remove('red-border');
        }
    }

    handleSubmit(e){
        e.preventDefault();

        const first = ReactDOM.findDOMNode(this.refs.first);
        const firstInput = ReactDOM.findDOMNode(this.refs.firstInput);
        const last = ReactDOM.findDOMNode(this.refs.last);
        const lastInput = ReactDOM.findDOMNode(this.refs.lastInput);
        const email = ReactDOM.findDOMNode(this.refs.email);
        const password = ReactDOM.findDOMNode(this.refs.password);

        debugger
        if (this.state.first_name.length < 1) {
            first.classList.add('active');
            firstInput.classList.add('red-border');
        }else {
            first.classList.remove('active');
            firstInput.classList.remove('red-border');
        }

        if (this.state.last_name.length < 1) {
            last.classList.add('active');
            lastInput.classList.add('red-border');
        } else {
            last.classList.remove('active');
            lastInput.classList.remove('red-border');
        }

        if (first.classList.contains('active') || last.classList.contains('active') || email.classList.contains('active') || password.classList.contains('active')){
            // console.log('cant sumbit');
        }else{
            this.props.createUser(this.state);
            this.setState({ first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, password: "" })
        }
    }



    render(){
        let errors = []
        if (this.props.errors instanceof Array){
            errors = this.props.errors;
        }
        

        return(
            
            <>
                <div className='signup-progress'>
                    <Link to="/"><i className="far fa-laugh-wink signup-logo"></i></Link>
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
                    <div className='name-section'>
                    <section className='signup-first'>
                    <input type="text" placeholder="First name" ref="firstInput" value={this.state.first_name} onChange={this.update("first_name")}/>
                                <div className='signup-first-error error-box' ref="first">Please enter your first name.</div>
                    </section>
                    <section className='signup-last'>
                    <input type="text" placeholder="Last name" ref="lastInput" value={this.state.last_name} onChange={this.update("last_name")} />
                                <div className='signup-last-error error-box' ref="last">Please enter your last name.</div>
                    </section>
                    </div>

                    <section className='signup-email'>
                    <input className='signup-email-field' ref="emailInput" type="text" placeholder="Email address" value={this.state.email} onChange={this.update("email")} />
                        <div className='signup-email-error error-box' ref="email">Please enter a valid email address.</div>
                    </section>
                    <section className='signup-password'>
                    <input type="password" placeholder="Password (min. 10 characters)" ref="passwordInput" value={this.state.password} onChange={this.update("password")} />
                            <div className='signup-password-error error-box' ref="password">Please enter at least 10 chars.</div>
                    </section>
                    <div className='buttons'>
                    <button>Sign Up</button>
                    </div>
                </form>
                </div>
            </>
        )
    }

}

export default SignupForm;