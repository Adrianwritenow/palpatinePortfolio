import React, {Component} from 'react';
// IMPORT LINK
import { Link } from 'react-router-dom';


export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Serif Gothic",
      "fontSize": "18rem"
    }
    let subtitleStyle = {
      "fontFamily": "Serif Gothic",
      "fontSize": "10rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(http://static0.therichestimages.com/wp-content/uploads/2017/01/palpatine.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let navTitle = {
      "fontFamily": "Serif Gothic",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                <Link to="/">Home</Link>
                  {/*LINK TO HOME PAGE*/}
                </li>
                <li>
                  <Link to="/about">About</Link>
                    {/*LINK TO MENU PAGE*/}
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                    {/*LINK TO CONTACT PAGE*/}
                </li>
                <li>
                  <Link  activeClassName="selected" to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="restaurant-name"
                style={titleStyle}>
                 Palpatine
              </div>
              <div className="subtitle" style={subtitleStyle}>
                Dark Lord of The Sith
              </div>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-11">
          <span>
            100 Padame Way, Death Star, SC, 29302 | (666) 666-6666
          </span>
        </footer>
      </div>
    );
  }
}
