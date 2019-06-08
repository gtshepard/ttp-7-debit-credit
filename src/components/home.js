import React, {Component} from 'react';
import Nav from './nav.js'
import TransactionForm from './transactionForm.js'

class Home extends Component {

  render(){
      return(
          <div>
              <Nav pageName="Bank of React"/>
              <TransactionForm/>
          </div>
      )
  }




}
export default Home;
