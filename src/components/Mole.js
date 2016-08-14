'use strict';

import React from 'react';
import MoleStore from 'stores//MoleStore';

require('styles//Moles.scss');


class Mole extends React.Component {
  render () {
    return (
      <button className={'moles mole-' + this.props.number} onClick={MoleStore.increaseMoleClickCount.bind(this)}>{this.props.number}</button>
    )
  }
}

Mole.displayName = 'Mole';

// Uncomment properties you need
// MolesComponent.propTypes = {};
// MolesComponent.defaultProps = {};
export default Mole;
