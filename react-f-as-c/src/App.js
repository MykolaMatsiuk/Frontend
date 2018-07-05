import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import Ratio from './Ratio';

class App extends Component {
  render() {
    return (
      <div>
        <Ratio>
          {(width, height, hasComputed) => (
            hasComputed 
              ? <img 
                  src="https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&h=350" 
                  width={width} 
                  height={height}
                  alt="picture"
                />
              : null
          )}
        </Ratio>
        <Ratio>
          {(width, height, hasComputed) => (
            <h1 style={{width, height, backgroundColor: 'red'}}>Hello world!</h1>
          )}
        </Ratio>
      </div>
    );
  }
}

export default App;
