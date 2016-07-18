require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ScoresComponent from './ScoresComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ScoresComponent className='score' />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
