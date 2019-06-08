
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav.js'
import axios from 'axios'
import Credit from './credit.js'
import Debit from './debit.js'
import '../style/data.css'

class DebitProfile extends Component {
  constructor(props){
     super(props)
     this.state = {
         debit:[]
     }
  }

  fecthAccountData = async (reportType) => {
        let acc = (await axios.get('https://moj-api.herokuapp.com/' + reportType)).data
        this.setState({debit:acc});

  }

  componentDidMount(){
        this.fecthAccountData("debits");
  }

  render() {
    let debits = this.state.debit || [];

    let debitInfo = debits.map((transaction) =>
      <Debit debit={transaction}/>
    );

      return(
        <div>
            <Nav pageName="Debit Profile"/>
            <div className="center-flex">
              <div className="data-flex-container">
                  <form>
                      <label>
                        Debit:
                         <input type="text" placeholder="try $500.00"/>
                      </label>
                      <button> Add Transaction</button>
                  </form>
                </div>
            </div>

            <div className="center-flex">
                 <div className="data-flex-container">
                    <div className="data-box">{debitInfo}</div>
                 </div>
            </div>
        </div>
      )
  }
}
export default DebitProfile
