
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav.js'
import axios from 'axios'
import Credit from './credit.js'
import '../style/data.css'

class CreditProfile extends Component {
  constructor(props){
     super(props)
     this.state = {
         credit:[],
         iAmount: 0,
         iDate: "5-33",
         iDesc: "hello"
     }
  }
  componentDidMount(){
        this.fecthAccountData("credits");
  }

  fecthAccountData = async (reportType) => {
     let acc = (await axios.get('https://moj-api.herokuapp.com/' + reportType)).data
     this.setState({credit:acc});
  }

  onChangeHandler = (event) => {

          if (event.target.name === 'amount'){
            this.setState({iAmount: event.target.value});
          } else if (event.target.name === 'date'){
            this.setState({iDate: event.target.value});
          } else if (event.target.name === 'description'){
            this.setState({iDesc: event.target.value});
          } else {
          }

  }
  onSubmitHandler = (event) => {
    event.preventDefault();
          console.log("CALLED");
      let cred = this.state.credit

      let append = {
          amount: this.state.iAmount,
          date: this.state.iDate,
          description: this.state.iDesc
      }
      cred.push(append)
      console.log("append" + cred)

      this.setState({credit: cred})
      console.log(this.state.credit)
  }


  render() {
    let credits = this.state.credit || [];
  //  acc.forEach((e) => console.log(e))
    let creditInfo = credits.map((transaction) =>
      <Credit credit={transaction}/>
    );
      return(
        <div>
            <Nav pageName="Credit Profile"/>
            <div className="center-flex">
              <div className="data-flex-container">
                  <form name="form" onSubmit={this.submitNow}>
                      <label>
                        Amount:
                         <input name="amount" type="text" placeholder="try $500.00"/>
                      </label>
                      <label>
                      Date:
                         <input name="date"type="text" placeholder="try 2018-04-15T05:47:22.348Z"/>
                      </label>
                      <label>
                        Description:
                         <input name ="description"type="text" placeholder="Shimmy Jimmy Ginger snap"/>
                      </label>
                      <input type="submit" value="submit"/>
                </form>
                </div>
            </div>

            <div className="center-flex">
                 <div className="data-flex-container">
                    <div className="data-box">{creditInfo}</div>
                 </div>
            </div>
        </div>
      )
  }
}
          //<button onClick={this.onClickCreditHandler}> Credit </button>
export default CreditProfile;
