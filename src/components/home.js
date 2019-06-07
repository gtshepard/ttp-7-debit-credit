import React, {Component} from 'react';
import AccountBalance from './accountBalance.js';
import {Link} from 'react-router-dom'
import Nav from './nav.js'

class Home extends Component {

  render(){
      return(
          <div>
              <Nav pageName="Bank of React"/>
              <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
      )
  }




}
export default Home;
