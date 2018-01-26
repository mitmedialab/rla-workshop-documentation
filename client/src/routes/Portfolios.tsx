import * as React from 'react';
import * as $ from 'jquery';

import PortfolioPage from '../components/PortfolioPage';

class Portfolios extends React.Component<any, any> {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      'teamNames': [],
      'teamFolderLinks': {},
      'currentName': '',
      'teamDescriptions': {}
    };
  }
  
  
  componentWillMount() {
    $.get('/teamfolders').then((folders) => {
      var teamNames = folders.map((folder) => { return folder[0]; });
      var teamDescriptions = {};
      teamNames.forEach((name) => {
        $.get('/desc/' + name.toLowerCase() + '.txt').then((description) => {
          if (description.startsWith('<!DOCTYPE html>')) description = '';
          teamDescriptions[name] = description;
          if (Object.keys(teamDescriptions).length == teamNames.length) {
            this.setState({
              'teamDescriptions': teamDescriptions,
              'teamNames': teamNames,
              'currentName': ''
            })
          }
        })
      })
    });
  }
  
  handleKeyPress(e) {
    
  }
  
  render() {
    return (
      <div 
        className="page-content uk-background-muted" 
        onKeyDown={(e) => { if(e.keyCode == 27) this.componentWillMount() }}>
        <div className="portfolio-tile-container">
          {this.state.teamNames.map((name) => {
            return (<div 
              key={name} 
              className="portfolio-tile uk-tile uk-tile-secondary" 
              uk-toggle="target: #portfolio-modal"
              onClick={() => { this.setState({'currentName': name})}}>
                <h3>{name}</h3>
                <p>{this.state.teamDescriptions[name]}</p>
              </div>
            );
          })}
        </div>
        
        <div id="portfolio-modal" className="uk-modal-full" uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body" uk-overflow-auto="true">
            
            <PortfolioPage name={this.state.currentName} />
            
            <button className="uk-modal-close-full uk-close-small" type="button" uk-close="true" onClick={this.componentWillMount.bind(this)}></button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Portfolios;
