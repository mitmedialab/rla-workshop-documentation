import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TeamFolders from './routes/TeamFolders';
import Documents from './routes/Documents';
import Schedule from './routes/Schedule';
import OfficeHours from './routes/OfficeHours';

class App extends React.Component<any, any> {
  // <li><a href="#"><span uk-icon="icon: file-edit;"></span> Journal</a></li>
  render() {
    return (      
      <div className="page-container">
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="">RLA Workshop</a>
            <ul className="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
              <li><a href="#">Team Folders</a></li>
              <li><a href="#">Documents</a></li>
              <li><a href="#">Schedule</a></li>
              <li><a href="#">Office Hours</a></li>
            </ul>
          </div>
        </nav>
        <ul className="uk-switcher switcher-container page-content-wrapper">
          <li className="page-content-wrapper"><TeamFolders /></li>
          <li className="page-content-wrapper"><Documents /></li>
          <li className="page-content-wrapper"><Schedule /></li>
          <li className="page-content-wrapper"><OfficeHours /></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));