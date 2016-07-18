require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MoleBox from './MoleBoxComponent';
import ScoresComponent from './ScoresComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ScoresComponent className='score' />
        <MoleBox />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
