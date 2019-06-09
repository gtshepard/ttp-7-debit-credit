
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav.js'
import axios from 'axios'
import Credit from './credit.js'
import Debit from './debit.js'
import '../style/data.css'
import DebitProfile from './debitProfile.js'
import CreditProfile from './creditProfile.js'

class UserProfile extends Component {
  constructor(props){
     super(props)
     this.state = {
         types: "profile",
         credit:[],
         debit:[],
         totalCredit: 0,
         totalDebit: 0
     }
  }

  //TODO: pass state down as props to credit and debits
  //TODO: conditional rendering of credit and debit depending on selectted button. (this includes the form)

  fetchCreditData = async (reportType) => {
     let acc = (await axios.get('https://moj-api.herokuapp.com/' + reportType)).data
     this.setState({credit:acc});
  }

  fetchDebitData = async () => {
     let data = (await axios.get('https://moj-api.herokuapp.com/debits')).data
     this.setState({debit:data});
  }

  componentDidMount(){
    this.setState({types: this.props.types});
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

    if(this.state.types === "profile"){
      return (
        <div>
            <Nav pageName="Profile"/>
            <div> UserName: {this.props.userName}</div>
            <div> Member Since: {this.props.memberSince}</div>
            <div> Credit: {"$" + cBalance}</div>
            <div> Debit:{"$" + dBalance}</div>
            <div> Balance:{"$" + (cBalance - dBalance).toFixed(2)}</div>
        </div>)
      }else if (this.state.types === "credit"){
            return (
              <div>
                <Nav pageName="Credit Profile"/>
                <div className="flex-container">
                  <div>
                    <CreditProfile balance={ "$" + (cBalance - dBalance).toFixed(2)}/>
                  </div>
                </div>
              </div>)
      } else if (this.state.types === "debit"){
        return (
          <div>
          <Nav pageName="Credit Profile"/>
          <div className="flex-container">
            <div>
              <DebitProfile balance={ "$" + (cBalance - dBalance).toFixed(2)}/>
            </div>
          </div>
          </div>)
      } else {
          return(<p>ERROR</p>)
          console.log("ERROR")
      }
  }
}
export default UserProfile;
