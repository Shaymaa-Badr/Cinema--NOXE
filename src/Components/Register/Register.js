import axios from 'axios';
import Joi from 'joi';
import React, { Component, Fragment } from 'react';

export default class Register extends Component {
  state = {
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
    error :'',
  };

  getInputsValues = (e) => {
    let state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  validateRegistrationForm = () => {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      age: Joi.number().integer().min(18).max(80),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
    let state = { ...this.state }
    delete state.error
    return schema.validate(state, { abortEarly: false })
  }
  sendRegisteredData = async () => {
    let state = { ...this.state }
    delete state.error
    let { data } = await axios.post(
      'https://route-egypt-api.herokuapp.com/signup',
      this.state
    );
    if(data.message === 'success'){
    this.props.history.replace('/login')
    }
    else{}
  };
  submitForm = (e) => {
    e.preventDefault();
    let validationResponse = this.validateRegistrationForm()
   
    if (validationResponse.error) {
      let state = {...this.state}
      state.error = validationResponse.error
      this.setState(state)
    } else {
      // Send registration to the database
     this.sendRegisteredData()
    }
  };

  render() {
    return (
      <Fragment>
        <h1 className='text-capitalize  py-5'>register</h1>
        {this.state.error && <div className='alert alert-danger'>{this.state.error.message}</div>}
        <form className='text-capitalize' action='' onSubmit={this.submitForm}>
          <label htmlFor=''>first name :</label>
          <input
            onChange={this.getInputsValues}
            type='text'
            className='form-control'
            name='first_name'
            value={this.state.first_name}
          />
          <label htmlFor=''>last name :</label>
          <input
            onChange={this.getInputsValues}
            type='text'
            className='form-control'
            name='last_name'
            value={this.state.last_name}
          />
          <label htmlFor=''>email :</label>
          <input
            onChange={this.getInputsValues}
            type='text'
            className='form-control'
            name='email'
            value={this.state.email}
          />
          <label htmlFor=''>age :</label>
          <input
            onChange={this.getInputsValues}
            type='number'
            className='form-control'
            name='age'
            value={this.state.age}
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
