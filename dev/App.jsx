import React from 'react';

import throttle from '../src/throttle.es6';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {background:'black'};
    this.signal = throttle(() => {
      this.setState({background:'red'});
      setTimeout(() => this.setState({background:'black'}), 300);
    }, 1000);
  }

  componentDidMount() {

  }

  render() {
    const { background } = this.state;
    return(
      <div>
        <div ref='signal' style={{width:'50px', height:'50px', background}} />
        <button onClick={this.signal}>Call throttled to 1 second</button>
      </div>
    );
  }
}
