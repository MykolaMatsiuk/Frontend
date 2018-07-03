import React, { Component } from 'react';
import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { RemoveRedEye } from '@material-ui/icons';

const styles = theme => ({
  eye: {
    cursor: 'pointer'
  }
});

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true
    }
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }))
  }

  render() {
    const { classes } = this.props;
    const { passwordIsMasked } = this.state;

    return <TextField 
      type={passwordIsMasked ? "password" : 'text'} 
      {...this.props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <RemoveRedEye 
              className={classes.eye}
              onClick={this.togglePasswordMask}
            />
          </InputAdornment>
        )
      }}
    />;
  }
}

PasswordInput.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired
};

PasswordInput = withStyles(styles)(PasswordInput);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { password } = this.state;

    return (
      <PasswordInput
        label="Password"
        name="password"
        value={password}
        onChange={this.onChange}
      />
    );
  }
}

export default App;
