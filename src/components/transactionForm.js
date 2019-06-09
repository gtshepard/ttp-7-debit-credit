import React, {Component} from 'react'


class TransactionForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            amount: 0,
            date: 819,
            desc: "yo",
            info:[]
        }
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
        return(
            <div>
            <form onSubmit={this.onSubmitHandle}>
                <input name="amount" type="text" placeholder="$555.07" onChange={this.onChangeHandleAmount}/>
                <input name="date" type="text"   placeholder="06-19-19" onChange={this.onChangeHandleDate}/>
                <input name="desc" type="text"  placeholder=" good duck stew" onChange={this.onChangeHandleDesc}/>
                <input type="submit" value="submit"/>
            </form>
            {this.state.amount}
            </div>
        )
    }
}

//<input type="text" value={this.state.date} placeholder="060819" onChange={this.onChangeHandle}/>
//<input type="text" value={this.state.desc} placeholder="Hi THere" onChange={this.onChangeHandle}/>
export default TransactionForm;
