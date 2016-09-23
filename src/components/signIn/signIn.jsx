import React from 'react';
import { browserHistory } from 'react-router'
require('./_signIn.scss');
var $ = require('jquery');
var _ = require('underscore');
var swal = require('sweetalert2');

class SignIn extends React.Component {
	constructor() {
      super();
      this.submitForm = function(){
        var isLoggedIn = false;
        $.ajax({method:'get',url:'../src/utils/data/users.json',contentType:'application/json',dataType:'json',success:function(data){
          _.each(data.userList,function(user){
            if(user.email === $('#email').val() && user.password === $('#password').val()){
              isLoggedIn = true;
              browserHistory.push('home')
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
      return (
        <section className="top-bar-right signin-container">
          <span>Email</span>
          <input id="email" type="text"></input>
          <span>Password</span>
          <input id="password" type="password"></input>
          <button type="submit" className="button" onClick={this.submitForm}>Sign In</button>
        </section>
      );
   }
}

export default SignIn;