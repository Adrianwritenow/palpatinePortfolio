import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class Portfolio extends Component {
  render() {
    // INLINE STYLING
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://static.comicvine.com/uploads/original/4/41224/2511627-jedi_temple.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }

    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style= {aboutStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              My Acomplishments
            </h2>
            <hr/>
            <p className="primary-text">Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. </p>
          </article>
        </section>
      </div>
    );
  }
}
