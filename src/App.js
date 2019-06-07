import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home.js';
import UserProfile from './components/userProfile.js';
import Login from './components/login.js'
class App extends Component {
  constructor(){
    super()
    this.state = {
      accountBalance: 145678.89,
      currentUser: {
          userName:'bob_loblaw',
          memberSince: '8/23/99'
      }
    }

  }

  mockLogin = (loginInfo) => {
      const newUser = this.state.currentUser
      newUser.userName = loginInfo.userName
      this.setState({currentUser: {newUser}})
  }

render(){
  const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
  const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName}
    memberSince={this.state.currentUser.memberSince}/>);
  const LoginComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} />)

  return (
    <Router>
        <div>

          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LoginComponent}/>
        </div>
    </Router>
  )
}
}

export default App;
