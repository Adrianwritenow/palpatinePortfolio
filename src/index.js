import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About.js';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
       <Switch>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/about" component={About}/>
         <Route path="/" component={Home}/>
       </Switch>
    </BaseLayout>
   </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
