import React from 'react';
import Header from './src/components/header/header.jsx';
require('./src/stylesheets/base/_base.scss');

class Main extends React.Component {
	constructor() {
      super();

   }
   
   render() {
   console.log("Main:: "+ this.props)
	  return (
	  <div>
		  <Header/>
	      {this.props.children}
      </div>
      )
   }
}
export default Main;