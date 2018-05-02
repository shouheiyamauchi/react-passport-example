import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm.jsx';
import API from '../utils/API';

class SignUpPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    user: {
      email: '',
      name: '',
      password: ''
    }
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    
    // create a string for an HTTP body message
    const { name, email, password } = this.state.user;

    //const formData = `email=${email}&password=${password}`;
    API.signUp({name, email, password}).then(res => {
      // change the component-container state
        // set a message
        localStorage.setItem('successMessage', res.data.message);

        // redirect user after sign up to login page
        this.props.history.push('/login');
        this.setState({
          errors: {}
        });

    }).catch(( {response} ) => {

        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
          errors
        });
      });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
