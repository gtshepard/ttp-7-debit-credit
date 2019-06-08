import React, {Component} from 'react';
import axios from 'axios'
class AccountBalance extends Component {

  constructor(props){
    super(props)
  }

  render(){

    /**et {
        id,
        desc,
        amount,
        date
    } = this.props.credit
**/
      return (
       <div>
         {this.props.credit && this.props.credit.amount || "hello"}
       </div>
    );
  }
}

export default AccountBalance;
