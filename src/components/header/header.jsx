import React from 'react';
import SignIn from '../signIn/signIn.jsx'
require('./_header.scss')

class Header extends React.Component {
	constructor() {
      super();

   }
   
   render() {
   console.log("header:: "+ this.props.children)
      return (
      	<header>
	        <img src="../src/utils/assets/logo.png" />
	        <SignIn />
        </header>
      );
   }
}
export default Header;