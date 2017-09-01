import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Refrences from './components/References';
import Contact from './components/Contact';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
       <Switch>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/about" component={About}/>
         <Route exact path="/" component={Home}/>
         <Route path="/refrences" component={Refrences}/>
         <Route path="/contact" component={Contact}/>
       </Switch>
    </BaseLayout>
   </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
