import * as React from 'react';
import * as $ from 'jquery';

import PortfolioPage from '../components/PortfolioPage';

class Portfolios extends React.Component<any, any> {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      'teamNames': [],
      'teamFolderLinks': {},
      'currentName': ''
    };
  }
  
  
  componentWillMount() {
    $.get('/teamfolders').then((folders) => {
      this.setState({
        'teamNames': folders.map((folder) => { return folder[0]; })
      });
    });
  }
  
  render() {
    return (
      <div className="page-content uk-background-muted">
        <div className="portfolio-tile-container">
          {this.state.teamNames.map((name) => {
            return (<div 
              key={name} 
              className="portfolio-tile uk-tile uk-tile-secondary" 
              uk-toggle="target: #portfolio-modal"
              onClick={() => { this.setState({'currentName': name})}}>{name}</div>)
          })}
        </div>
        
        <div id="portfolio-modal" className="uk-modal-full" uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body" uk-overflow-auto="true">
            
            <PortfolioPage name={this.state.currentName} />
            
            <button className="uk-modal-close-full uk-close-small" type="button" uk-close="true"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolios;
