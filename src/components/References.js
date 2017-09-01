import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/index.css';

export default class References extends Component {
  render() {
    // INLINE STYLING
    let style = {
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "235px",
      "textAlign": "center",
      "fontSize": "8em"

    }

    let vader = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.sideshowtoy.com/wp-content/uploads/2014/07/star-wars-darth-vader-life-size-feature-400184.jpg)",

    }

    let fett = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://nerdist.com/wp-content/uploads/2017/06/boba-fett-1.jpg)",


    }

    let tarkin = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://lumiere-a.akamaihd.net/v1/images/databank_tarkin_01_169_97d0a95c.jpeg?region=0%2C0%2C1560%2C878&width=768)",
      "fontSize": "6em"
    }
    let quote={
      "color":"grey",
      "fontSize": "25px"

    }


    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
      <section className="row" style={{...style, ...vader}}>
        DARTH VADER
      <p style={quote}>"NOOOOOOOOOOOOOOOOOOOOOOOOOOOO"</p>
      </section>
      <section className="row" style={{...style, ...fett}}>
        BOBBA FETT
      <p style={quote}>"Seriously great dude"</p>
      </section>
      <section className="row" style={{...style, ...tarkin}}>
        GRAND MOFF TARKIN
      <p style={quote}>"The Jedi are extinct, their fire has gone out of the universe. You, my friend, are all that's left of their religion."</p>
      </section>

      </div>
    );
  }
}
