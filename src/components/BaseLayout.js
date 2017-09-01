import React, {Component} from 'react';
// IMPORT LINK
import { NavLink } from 'react-router-dom';


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

    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/refrences">
                    Refrences
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/contact">
                    Contact
                  </NavLink>
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
