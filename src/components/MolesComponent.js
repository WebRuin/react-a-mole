'use strict';

import React from 'react';

require('styles//Moles.scss');

let MolesComponent = (props) => (
  <button className={'mole-' + this.props.number}>this.props.number</button>
);

MolesComponent.displayName = 'MolesComponent';

// Uncomment properties you need
// MolesComponent.propTypes = {};
// MolesComponent.defaultProps = {};

export default MolesComponent;
