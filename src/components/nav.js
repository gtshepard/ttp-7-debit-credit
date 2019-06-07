import React, {Component} from 'react';
import '../style/nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component {

    constructor() {
        super()
    }

    render(){
        return(
              <div>
              <div className='nav-bar'>
                <h2> {this.props.pageName}</h2>
                  <div className="button-flex-container">
                      <div className="button-box">
                          <Link className="link" to="/"> Home</Link>
                      </div>
                      <div className="button-box ">
                          <Link className="link" to="/login">Login</Link>
                      </div>
                  </div>
              </div>
              </div>
        );
    }
}
/*


*/
export default Nav
