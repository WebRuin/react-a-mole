require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MoleBox from './MoleBox';
import Scores from './Scores';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Scores className='score' />
        <MoleBox />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
