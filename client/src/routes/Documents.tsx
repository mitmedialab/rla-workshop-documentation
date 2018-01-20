import * as React from 'react';

class Documents extends React.Component<any, any> {
  render() {
    return (
      <div className="uk-padding uk-section uk-section-muted">
        <ul className="uk-list uk-list-large uk-list-divider">
          <li><a className="uk-button uk-button-primary" href="#">Team 1</a></li>
          <li><a className="uk-button uk-button-primary" href="#">Team 2</a></li>
          <li><a className="uk-button uk-button-primary" href="#">Team 3</a></li>
        </ul>
      </div>
    );
  }
}

export default Documents;
