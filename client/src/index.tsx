import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Schedule from './routes/Schedule';
import Journal from './routes/Journal';
import OfficeHours from './routes/OfficeHours';
import Documents from './routes/Documents';

class App extends React.Component<any, any> {
  render() {
    return (      
      <div className="uk-padding-small">
        <h2 className="uk-heading-line uk-text-center"><span>RLA Workshop</span></h2>
        <ul className="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
          <li><a href="#"><span uk-icon="icon: calendar;"></span> Schedule</a></li>
          <li><a href="#"><span uk-icon="icon: users;"></span> Office Hours</a></li>
          <li><a href="#"><span uk-icon="icon: folder;"></span> Documents</a></li>
          <li><a href="#"><span uk-icon="icon: file-edit;"></span> Journal</a></li>
        </ul>
        <ul className="uk-margin uk-switcher switcher-container">
          <li><Schedule /></li>
          <li><OfficeHours /></li>
          <li><Documents /></li>
          <li><Journal /></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));