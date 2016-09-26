import React from 'react';
require('./_signOut.scss')

class SignOut extends React.Component {
	constructor() {
      super();
   }
   
   render() {
      console.log(this.props)
      return (
      		<div className="sign-out-container">
				<i className="fa fa-user" aria-hidden="true"></i>
			</div>
      );
   }
}
export default SignOut;