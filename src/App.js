import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
      numberExposed: 0,
  };

  numberPressed = (event) => {

      let newDisplayedNumber = this.state.numberExposed;

      this.state.numberExposed !== 0 ?
          newDisplayedNumber += event.target.dataset.key :
          newDisplayedNumber = event.target.dataset.key;

      this.setState({

            numberExposed: newDisplayedNumber

          })
    };

  clearPressed = () => {

      this.setState({

          numberExposed: 0

      })

  };

  render() {
    return (
      <React.Fragment>
        <div className='calculator'>
          <div className='result'>{ this.state.numberExposed }</div>
          <div className='clear' onClick={ this.clearPressed }>clear</div>
          <div className='button operator'>&divide;</div>
          <div className='button' onClick={ this.numberPressed } data-key='7'>7</div>
          <div className='button' onClick={ this.numberPressed } data-key='8'>8</div>
          <div className='button' onClick={ this.numberPressed } data-key='9'>9</div>
          <div className='button operator'>-</div>
          <div className='button' onClick={ this.numberPressed } data-key='4'>4</div>
          <div className='button' onClick={ this.numberPressed } data-key='5'>5</div>
          <div className='button' onClick={ this.numberPressed } data-key='6'>6</div>
          <div className='button operator'>+</div>
          <div className='button' onClick={ this.numberPressed } data-key='1'>1</div>
          <div className='button' onClick={ this.numberPressed } data-key='2'>2</div>
          <div className='button' onClick={ this.numberPressed } data-key='3'>3</div>
          <div className='button operator'>=</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
