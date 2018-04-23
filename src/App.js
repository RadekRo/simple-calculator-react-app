import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='calculator'>
          <div className='result'>Result frame</div>
          <div className='clear'>Clear</div>
          <div className='button'>/</div>
          <div className='button'>7</div>
          <div className='button'>8</div>
          <div className='button'>9</div>
          <div className='button'>-</div>
          <div className='button'>4</div>
          <div className='button'>5</div>
          <div className='button'>6</div>
          <div className='button'>+</div>
          <div className='button'>1</div>
          <div className='button'>2</div>
          <div className='button'>3</div>
          <div className='button'>=</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
