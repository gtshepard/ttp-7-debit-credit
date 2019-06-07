
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav.js'
import axios from 'axios'
import AccountBalance from './accountBalance.js'
class UserProfile extends Component {
  constructor(props){
     super(props)
     this.state = {
         credit:[]
     }
  }

  fecthAccountData = async () => {
        //let {debit} = await axios.get('https://moj-api.herokuapp.com/debits')
        let acc = (await axios.get('https://moj-api.herokuapp.com/credits')).data
        //console.log(typeof acc)
        console.log("bug:" + acc)
        this.setState({credit:acc});
      //  console.log(credit[0]);
  }
  onClickHandler = () => {
      this.fecthAccountData();
  }

  render() {
    let account = this.state.credit || [];
  //  acc.forEach((e) => console.log(e))
    let accountInfo = account.map((transaction) =>
      <AccountBalance credit={transaction}/>
    );

      return(
        <div>
            <Nav pageName="Profile"/>
            <button onClick={this.onClickHandler}> Account </button>
            <div> UserName: {this.props.userName}</div>
            <div> Member Since: {this.props.memberSince}</div>
            {accountInfo}
        </div>
      )
  }
}
export default UserProfile;
