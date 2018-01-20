import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Schedule from './routes/Schedule';
import Journal from './routes/Journal';
import OfficeHours from './routes/OfficeHours';
import Documents from './routes/Documents';

class App extends React.Component<any, any> {
  // <li><a href="#"><span uk-icon="icon: file-edit;"></span> Journal</a></li>
  render() {
    return (      
      <div>
        <nav className="uk-navbar-container uk-margin" uk-navbar="true">
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="#">RLA Workshop</a>
            <ul className="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
              <li><a href="#"><span uk-icon="icon: calendar;"></span> Schedule</a></li>
              <li><a href="#"><span uk-icon="icon: users;"></span> Office Hours</a></li>
              <li><a href="#"><span uk-icon="icon: folder;"></span> Team Folders</a></li>
            </ul>
          </div>
        </nav>
        <ul className="uk-margin uk-switcher switcher-container">
          <li><Schedule /></li>
          <li><OfficeHours /></li>
          <li><Documents /></li>
        </ul>
      </div>
    );
      // <div className="uk-padding-small">
      //   <h2 className="uk-heading-line uk-text-center"><span>RLA Workshop</span></h2>
      //   <ul className="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
      //     <li><a href="#"><span uk-icon="icon: calendar;"></span> Schedule</a></li>
      //     <li><a href="#"><span uk-icon="icon: users;"></span> Office Hours</a></li>
      //     <li><a href="#"><span uk-icon="icon: folder;"></span> Team Folders</a></li>
      //   </ul>
      //   <ul className="uk-margin uk-switcher switcher-container">
      //     <li><Schedule /></li>
      //     <li><OfficeHours /></li>
      //     <li><Documents /></li>
      //   </ul>
      // </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));