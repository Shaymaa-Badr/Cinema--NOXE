import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Joi from 'joi';
import SecureLS from 'secure-ls';
import authentication from '../authentication';


let ls = new SecureLS({ encodingType: 'aes' });

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };
  getInputsValues = (e) => {
    let state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  validateLoginForm = () => {
    let schema = Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    let state = { ...this.state };
    delete state.error;
    return schema.validate(state, { abortEarly: false });
  };
  sendLoginData = async () => {
    let state = { ...this.state };
    delete state.error;
    let { data } = await axios.post(
      'https://route-egypt-api.herokuapp.com/signin',
      this.state
    );
    if (data.message === 'success') {
      ls.set('currentUser', data.token);
      //localStorage.setItem('currentUser', data.token);
      authentication.logIn(
        ()=>{ this.props.history.replace('/home')})  
       
    } 
    else {
      authentication.logOut(
        ()=>{ this.props.history.replace('/login')})  
    }
  };
  submitForm = (e) => {
    e.preventDefault();
    let validationResponse = this.validateLoginForm();
    if (validationResponse.error) {
      let state = { ...this.state };
      state.error = validationResponse.error;
      this.setState(state);
    } else {
      // Send login data to the database
      this.sendLoginData();
    }
  };
  render() {
    return (
      <Fragment>
        <h1 className='text-capitalize  py-5'>login</h1>
        {this.state.error && (<div className='alert alert-danger'>{this.state.error.message}</div>)}
        <form className='text-capitalize' action='' onSubmit={this.submitForm}>
          <label htmlFor=''>email :</label>
          <input
            onChange={this.getInputsValues}
            type='text'
            className='form-control mb-4'
            name='email'
            value={this.state.email}
          />

          <label htmlFor=''>password :</label>
          <input
            onChange={this.getInputsValues}
            type='password'
            className='form-control'
            name='password'
            value={this.state.password}
          />
          <button type='submit' className='btn btn-info py-2 px-3 mt-3'>
            submit
          </button>
        </form>
      </Fragment>
    );
  }
}
