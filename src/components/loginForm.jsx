import React, { Component } from 'react';

export class loginForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>LOGIN</h1>
          <form>
            <div class='form-group'>
              <label htmlFor='username'>UserName</label>
              <input
                type='email'
                class='form-control'
                id='username'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
              <small id='emailHelp' class='form-text text-muted'>
                We'll never share your username with anyone else.
              </small>
            </div>
            <div class='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                class='form-control'
                id='password'
                placeholder='Password'
              />
            </div>
            <div class='form-check'>
              <input
                type='checkbox'
                class='form-check-input'
                id='exampleCheck1'
              />
              <label class='form-check-label' for='exampleCheck1'>
                Check me out
              </label>
            </div>
            <button type='submit' class='btn btn-primary'>
              LOGIN
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default loginForm;
