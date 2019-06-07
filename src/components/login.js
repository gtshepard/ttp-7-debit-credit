import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Nav from './nav.js'

class Login extends Component {
  constructor(){
    super()

    this.state = {
        user:{
          userName: '',
          password: ''
        },
        redirect: false
    }

  }

  onChangeHandler = (event) => {
      const updatedUser = this.state.user
      const inputField = event.target.name
      const inputValue = event.target.value
      updatedUser[inputField] = inputValue
      //must set state for every key
      this.setState({user: updatedUser})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.mockLogin(this.state.user);
    this.setState({redirect: true});
  }

  render(){

    if(this.state.redirect){
        return (<Redirect to="/userProfile"/>)
    }

      return(
          <div>
            <Nav pageName="Login"/>
            <form onSubmit={this.onSubmit}>
                <div>
                  <label htmlFor="userName">User Name</label>
                  <input type="text" name="userName" onChange={this.onChangeHandler} value={this.state.user.userName}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password"/>
                </div>
                <button>Login</button>
            </form>
          </div>
      );
  }

}
export default Login
