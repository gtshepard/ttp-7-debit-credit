
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


  onChangeHandleAmount = (event) => {
      this.setState({ amount: event.target.value});
      console.log("On Change:" + this.state.amount);
  }

  onChangeHandleDate = (event) => {
      this.setState({ date: event.target.value});
      console.log("On Change:" + this.state.date);
  }

  onChangeHandleDesc = (event) => {
      this.setState({ desc: event.target.value});
      console.log("On Change:" + this.state.desc);
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
      console.log("SUBMIT:" +  this.state.amount)

      this.setState((state) => { state.info.push(
        {
          a: this.state.amount,
          b: this.state.date,
          c: this.state.desc
        }
    )});
      console.log(this.state.info);
  }

  render() {
    let credits = this.state.credit || [];
  //  acc.forEach((e) => console.log(e))
    let creditInfo = credits.map((transaction) =>
      <Credit credit={transaction}/>
    );
      return(
        <div>
            <div className="center-flex">
              <div className="data-flex-container">
                  <div className="data-item">
                  Balance: {this.props.balance}
              </div>

              </div>
            </div>

            <div className="center-flex">
                 <div className="data-flex-container">

                    <div className="data-box">
                    {creditInfo}
                    </div>
                 </div>
            </div>
        </div>
      )
  }
}
          //<button onClick={this.onClickCreditHandler}> Credit </button>
export default CreditProfile;
