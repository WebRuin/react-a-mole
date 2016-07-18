'use strict';

import React from 'react';
import MolesComponent from './MolesComponent';
import MoleStore from 'stores//MoleStore';

require('styles//MoleBox.scss');

class MoleBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfMoles: MoleStore.getNumberOfMoles()
    }
  }

  render() {
    let number = this.state.numberOfMoles;
    let moles = '';
    for (let i = 0; i > 0; i++) {
      moles = moles + '<MolesComponent number={i} />';
      console.log9(moles)
    }

    return (
      <section>
        { moles }
      </section>
    )
  }
}

MoleBoxComponent.displayName = 'MoleBoxComponent';

// Uncomment properties you need
// MoleBoxComponent.propTypes = {};
// MoleBoxComponent.defaultProps = {};

export default MoleBoxComponent;
