import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
require('./_signIn.scss');
var $ = require('jquery');
var _ = require('underscore');
var swal = require('sweetalert2');
import Home from '../home/home.jsx';
import SignOut from '../signOut/signOut.jsx';

class SignIn extends React.Component {
	constructor() {
      super();
      this.submitForm = function(){
        var isLoggedIn = false,_self=this;
        $.ajax({method:'get',url:'../src/utils/data/users.json',contentType:'application/json',dataType:'json',success:function(data){
          _.each(data.userList,function(user){
            if(user.email === $('#email').val() && user.password === $('#password').val()){
              isLoggedIn = true;
              browserHistory.push('home');
              $('.signin-container').replaceWith('<section id="signOut" class="top-bar-right"><SignOut /></section>')
              ReactDOM.render(<SignOut />,document.getElementById('signOut'))
              return false;
            }
          })
          if(!isLoggedIn){
            swal(
              'Oops...',
              'Incorrect Email or Password!',
              'error'
            )
          }
        },error:function(e){
          console.log("error"+e)
        }})
      }
   }
   
   render() {
      console.log("signIn"+this.props.location)
      return (
        <section className="top-bar-right signin-container">
          <span>Email</span>
          <input id="email" type="text"></input>
          <span>Password</span>
          <input id="password" type="password"></input>
          <button type="submit" className="button" onClick={this.submitForm.bind(this)}>Sign In</button>
        </section>
      );
   }
}

export default SignIn;