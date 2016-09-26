import React from 'react';
require('./_home.scss')

class Home extends React.Component {
	constructor() {
      super();
   }
   
   render() {
      console.log(this.props)
      return (
			<div className="homePageContainer">Home page</div>
      );
   }
}
export default Home;