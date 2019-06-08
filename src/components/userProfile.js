
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav.js'
import axios from 'axios'
import Credit from './credit.js'
import Debit from './debit.js'
import '../style/data.css'

class UserProfile extends Component {
  constructor(props){
     super(props)
     this.state = {
         credit:[],
         debit:[],
         totalCredit: 0,
         totalDebit: 0
     }
  }

  fetchCreditData = async (reportType) => {
     let acc = (await axios.get('https://moj-api.herokuapp.com/' + reportType)).data
     this.setState({credit:acc});
  }

  fetchDebitData = async () => {
     let data = (await axios.get('https://moj-api.herokuapp.com/debits')).data
     this.setState({debit:data});
  }

  componentDidMount(){
    this.fetchCreditData("credits");
    this.fetchDebitData();
  }

  render() {
    let cBal = this.state.credit
    let cBalance = 0;
    cBal.forEach((e) => cBalance += e.amount);
    console.log("credit: " + cBalance);
    ///this.setState({totalCredit: balance});
    let dBal = this.state.debit
    let dBalance = 0;
    dBal.forEach((e) => dBalance += e.amount);
    console.log("debit: " + dBalance);

      return(
        <div>
            <Nav pageName="Profile"/>
            <div> UserName: {this.props.userName}</div>
            <div> Member Since: {this.props.memberSince}</div>
            <div> Credit: {"$" + cBalance}</div>
            <div> Debit:{"$" + dBalance}</div>
            <div> Balance:{"$" + (cBalance - dBalance).toFixed(2)}</div>
            <div className="flex-container">
            
            </div>
        </div>
      )
  }
}
export default UserProfile;
