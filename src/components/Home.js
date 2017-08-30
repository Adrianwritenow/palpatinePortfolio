import React, { Component } from 'react';
// IMPORT EMAIL COMPONENT


export default class Home extends Component {
  render() {
    // INLINE STYLING
    let styleFriend = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
      "textAlign": "center",
      "fontSize": "18rem",
      "color": "#fff",
      "backgroundImage": "url(http://pre10.deviantart.net/1b95/th/pre/f/2013/328/8/7/sw_012_by_dave_daring-d6vilsh.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let styleHero = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
      "textAlign": "center",
      "fontSize": "18rem",
      "color": "#fff",
      "backgroundImage": "url(https://static.comicvine.com/uploads/original/11112/111128283/5194958-9470945953-yj7tg.gif)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let styleMaster = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
      "textAlign": "center",
      "fontSize": "18rem",
      "color": "#fff",
      "backgroundImage": "url(http://cdn.chud.com/9/92/900x900px-LL-927ab87d_Palpatine-Emperor-Episode-III-The-Revenge-of-the-Sith-Unlimited-Star-Wars.gif)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }


    return (
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={styleMaster}>
          MASTER
        </section>
        <section className="row" style={styleHero}>
          HERO
        </section>
        <section className="row" style={styleFriend}>
          FRIEND
        </section>
  </div>
    );
  }
}
