import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Main from './Main.jsx';
import Home from './src/components/home/home.jsx';

var MainImg = class Header extends React.Component {
	constructor() {
      super();
   }
   
   render() {
      return (
      	<img className="small-12" src="./src/utils/assets/main.jpg" />
      );
   }
}

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {Main}>
         <IndexRoute component = {MainImg} />
         <Route path = "mainImg" component = {MainImg} />
         <Route path = "home" component = {Home} />
      </Route>
   </Router>
), document.getElementById('app'));