'use strict';

import React from 'react';
import Mole from './Mole';
import MoleStore from 'stores//MoleStore';

require('styles//MoleBox.scss');

class MoleBox extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfMoles: MoleStore.getNumberOfMoles(),
      moleArray: []
    }
  }

  render() {
    for (let i = 1; i <= (this.state.numberOfMoles); i++) {
      this.state.moleArray.push(i);
    }

    const drawMoles = this.state.moleArray.map(function(mole, n) {
       return (
         <Mole key={n} number={n} />
       );
     })

     return (
       <section className='molebox'>
         {drawMoles}
       </section>
     )
   }
}

MoleBox.displayName = 'MoleBox';

// Uncomment properties you need
// MoleBox.propTypes = {};
// MoleBox.defaultProps = {};

export default MoleBox;
