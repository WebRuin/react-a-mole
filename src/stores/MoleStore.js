'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class MoleStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      difficultyFactor: .25, // score to decriment per ms
      loopSpeed: 200,
      gameTime: 60000,
      moleClickCount: 0,
      numberOfMoles: 9,
      score: 0,
      successfulHits: 0
    };
    this.addMoles = this.addMoles.bind(this);
    this.startClock = this.startClock.bind(this);
    this.increaseMoleClickCount = this.increaseMoleClickCount.bind(this);
  }

  addMoles(moles){
    this.setState({ numberOfMoles: this.state.numberOfMoles + moles});
  }

  getGameTime() {
    const gameTime = this.state.gameTime;
    return gameTime;
  }

  getMoleClickCount() {
    const moleClicks = this.state.moleClickCount;
    return moleClicks;
  }

  getNumberOfMoles() {
    const numberOfMoles = this.state.numberOfMoles;
    return numberOfMoles;
  }


  getMoleClickCount() {
    const moleClicks = this.state.moleClickCount;
    return moleClicks;
  }

  getScore() {
    const score = this.state.score;
    return score;
  }

  increaseMoleClickCount() {
    this.setState({ moleClickCount: this.state.moleClickCount + 1});
    this.emit('change');
  }

  startClock() {
    while ( this.state.gameTime > 0 ) {
      this.state.gameTime = this.state.gameTime - 50;
      this.emit('change');
    }
  }

  handleActions(action) {
    switch(action.type) {
      case 'ADD_MOLES': {
        this.addMoles(action.moles);
        break;
      }
      case 'RESET_SCORE': {
        this.resetScore();
        break;
      }
      case 'RESET_TIME': {
        this.resetTime();
        break;
      }
      case 'START_CLOCK': {
        this.startClock();
        break;
      }
      case 'INCREASE-MOLE-CLICK-COUNT': {
        this.increaseMoleClickCount();
      }
    }
  }
}

const moleStore = new MoleStore
export default moleStore
dispatcher.register(moleStore.handleActions.bind(moleStore))
