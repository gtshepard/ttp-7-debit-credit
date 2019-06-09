
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
         amount: 0,
         date: "5-33",
         description: "hello"
     }
  }

  componentDidMount(){
      this.fecthAccountData("credits");
  }

  fecthAccountData = async (reportType) => {
     let acc = (await axios.get('https://moj-api.herokuapp.com/' + reportType)).data
     this.setState({credit:acc});
     console.log(this.state.credit)
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
      this.setState({ description: event.target.value});
      console.log("On Change:" + this.state.description);
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
      console.log("SUBMIT:" +  this.state.amount)

      this.setState((state) => { state.credit.push(
        {
          amount: this.state.amount,
          date: this.state.date,
          description: this.state.description
        }
    )});

    console.log(this.state.credit);
  }

  render() {
    console.log("RENDERME")
    let credits = this.state.credit|| [];
    console.log("SHOULD" + this.state.credit)
    let creditInfo = credits.map((transaction) =>
      <Credit credit={transaction}/>
    );

    let ok = credits.forEach((transaction) =>
      console.log("T" + transaction)
    );


      return(
        <div>
            <div className="center-flex">
              <div className="data-flex-container">
                  <div className="data-item">
                  Balance: {this.props.balance}
              </div>
            </div>


            <div>
            <form onSubmit={this.onSubmitHandle}>
                <input name="amount" type="text" placeholder="$555.07" onChange={this.onChangeHandleAmount}/>
                <input name="date" type="text"   placeholder="06-19-19" onChange={this.onChangeHandleDate}/>
                <input name="desc" type="text"  placeholder=" good duck stew" onChange={this.onChangeHandleDesc}/>
                <input type="submit" value="submit"/>
            </form>
            {this.state.amount}
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
export default CreditProfile;
