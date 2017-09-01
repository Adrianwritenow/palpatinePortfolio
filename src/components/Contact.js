import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//IMPORT STYLES
import '../styles/index.css';

export default class Contact extends Component {
  render() {
    // INLINE STYLING
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://static.comicvine.com/uploads/original/4/41224/2511627-jedi_temple.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px",
      "textAlign": "center",
      "fontSize": "1.5em"

    }

    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-5">
          <dl className="dl-horizontal">
              <dt>Phone:</dt>
              <Link to=""><dd>(666) 666-6666</dd></Link>
              <dt>Email:</dt>
              <Link to=" "><dd>palpatine@Aol.com</dd></Link>
              <dt>Git Hub:</dt>
              <Link to=""><dd>github.com/palpatine</dd></Link>
            </dl>
          </article>
        </section>
      </div>
    );
  }
}
