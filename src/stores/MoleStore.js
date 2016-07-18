'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class MoleStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      numberOfMoles: 9,
      score: 0,
      gameTime: 60000
    }
  }

  addMoles(moles){
    const newMoleCount = this.state.numberOfMoles + moles;
    this.state.numberOfMoles = newMoleCount;
  }

  getNumberOfMoles() {
    const numberOfMoles = this.state.numberOfMoles;
    return numberOfMoles;
  }

  getScore() {
    const score = this.state.score;
    return score;
  }

  getTimer() {
    const score = this.state.gameTime;
    const minutes = score / 1000 / 60 << 0;
    const seconds = (score / 1000) % 60;
    const timeLeft = {
      mins: minutes,
      secs: seconds
    }

    return timeLeft;
  }

  startClock() {
    console.log('Clicked!');
    let newGameTime
    while ( this.state.gameTime > 0 ) {
      newGameTime = this.state.gameTime - 100;
      this.state.gameTime = 10;
      console.log(newGameTime);
      this.emit('change');
    }
    console.log(newGameTime);
  }

  resetTime() {

  }

  setLocation() {

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
    }
  }
}

const moleStore = new MoleStore
export default moleStore
dispatcher.register(moleStore.handleActions.bind(moleStore))
