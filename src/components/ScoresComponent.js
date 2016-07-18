'use strict';

import React from 'react';
import MoleStore from 'stores//MoleStore';

require('styles//Scores.scss');


class ScoresComponent extends React.Component {
  constructor() {
    super();
    const timer = MoleStore.getTimer();
    this.state = {
      score: MoleStore.getScore(),
      timer: {
        mins: timer.mins,
        sec: timer.secs
      }
    }
  }

  handleTimer() {
    MoleStore.startClock()
  }

  render() {
    // if (this.state.timer.mins === 0) {
    //   let timer = 'Minute: ' + this.state.timer.mins;
    // } else {
    //   let timer = 'Minute: ' + this.state.timer.mins + ' Seconds: ' + this.state.timer.secs;
    // }
    return (
      <div className={this.props.className}>
        <section className='score'>
          <p><span className='scoreBox'>Score: </span>{ this.state.score }</p>
        </section>
        <section className='timer'>
          <p>
            <span>Minutes: </span>{ this.state.timer.mins } |
            <span className='seconds'> Seconds </span>{ this.state.timer.sec }
          </p>
          <button className='startClock' onClick={this.handleTimer.bind(this)}>Start Clock</button>
        </section>
      </div>
    );
  }
}

ScoresComponent.displayName = 'ScoresComponent';

// Uncomment properties you need
// ScoresComponent.propTypes = {};
// ScoresComponent.defaultProps = {};

export default ScoresComponent;
