import React, {Component} from 'react';
import '../style/data.css'
class Debit extends Component {

  constructor(props){
    super(props)
  }

  render(){
      return (
       <div className="data-flex-container">
          <div className="data-item">
            { "-$" + this.props.debit.amount}
          </div>
          <div className="data-item">
            {this.props.debit && this.props.debit.date || "hello"}
          </div>
          <div className="data-item">
            {this.props.debit && this.props.debit.description || "hello"}
          </div>
       </div>
    );
  }
}

export default Debit;
