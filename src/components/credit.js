import React, {Component} from 'react';
class Credit extends Component {

  constructor(props){
    super(props)
  }

  render(){
      return (
      <div className="data-flex-container">
         <div className="data-item">
           {"$" + this.props.credit.amount}
         </div>
         <div className="data-item">
           {this.props.credit && this.props.credit.date || "hello"}
         </div>
         <div className="data-item">
           {this.props.credit && this.props.credit.description || "hello"}
         </div>
       </div>
    );
  }
}

export default Credit;
