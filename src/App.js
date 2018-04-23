import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='calculator'>
          <div className='result'>0</div>
          <div className='clear'>clear</div>
          <div className='button operator'>&divide;</div>
          <div className='button'>7</div>
          <div className='button'>8</div>
          <div className='button'>9</div>
          <div className='button operator'>-</div>
          <div className='button'>4</div>
          <div className='button'>5</div>
          <div className='button'>6</div>
          <div className='button operator'>+</div>
          <div className='button'>1</div>
          <div className='button'>2</div>
          <div className='button'>3</div>
          <div className='button operator'>=</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
