import * as React from 'react';
import * as $ from 'jquery';
import * as ReactMarkdown from 'react-markdown';

class PortfolioPage extends React.Component<any, any> {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      'name': '',
      'folderLink': '',
      'markdown': '',
      'imageLinks': [],
      'editing': false
    };
  }
  
  componentWillMount() {
    this.updateState(this.props.name);
  }
  
  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps.name);
  }
  
  updateState(name) {
    $.get('/teamfolders').then((folders) => {      
      $.get('/md/' + name.toLowerCase() + '.md').then((markdown) => {
        $.get('/desc/' + name.toLowerCase() + '.txt').then((description) => {
          $.get('/imagelinks?name=' + name.toLowerCase()).then((imageLinks) => {
            if (markdown.startsWith('<!DOCTYPE html>')) markdown = '';
            if (description.startsWith('<!DOCTYPE html>')) description = '';
            
            var folderLink = folders.filter((folder) => {
              return (folder[0].toLowerCase() == name.toLowerCase());
            })[0][1];
                    
            this.setState({
              'name': name,
              'description': description,
              'markdown': markdown,
              'folderLink': folderLink,
              'imageLinks': imageLinks,
              'editing': false
            });
          });
        });
      });
    });
  }
  
  handleMarkdownChange(e) {
    this.setState({'markdown': e.target.value});
    $.post('/teammarkdown', {
      'markdown': e.target.value,
      'name': this.state.name
    });
  }
  
  handleDescriptionChange(e) {
    this.setState({'description': e.target.value});
    $.post('/teamdescription', {
      'description': e.target.value,
      'name': this.state.name
    });
  }
  
  getBottomSection() {
    if ((this.state.imageLinks.length > 0) || this.state.editing) {
      return (<div className="markdown-grid uk-child-width-expand@s fill-height" uk-grid="true">
          {this.getContentSection()}
          <div className="fill-height">{this.getRightSection()}</div>
        </div>
      );
    } else {
      return (
        <div>
          {this.getContentSection()}
        </div>
      );
    }
  }
  
  getContentSection() {
    return (
      <div>
        <div className="maintain-height">{this.state.description}</div>
        <hr className="uk-divider-small" />
        <ReactMarkdown className="markdown-container" source={this.state.markdown} />
      </div>
    );
  }
  
  getRightSection() {
    if (this.state.editing) {
      return (
        <div className="fill-height">
          <textarea 
          className="uk-textarea"
          rows={1} 
          onChange={this.handleDescriptionChange.bind(this)}
          value={this.state.description}></textarea>
          <hr className="uk-divider-small" />
          <textarea 
          className="uk-textarea fill-height-smaller"
          onChange={this.handleMarkdownChange.bind(this)}
          value={this.state.markdown}></textarea>
        </div>
      );
    } else {
      return (
        <div className="fill-height">      
          <div className="fill-neight uk-position-relative uk-visible-toggle" uk-slideshow="animation: push; autoplay:true; autoplay-interval: 10000; ratio: 4:3">
            <ul className="uk-slideshow-items">
              {this.state.imageLinks.map((link) => {
                return (
                  <li key={link}>
                    <img src={link} alt="" uk-cover="true" />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    }
  }
  
  toggleEditing() {
    this.setState({'editing': !this.state.editing});
  }
  
  render() {
    return (
      <div className="fill-height">
        
        <div className="portfolio-header-container">
          <div className="portfolio-header-left">
            <h1>{this.state.name}</h1>
          </div>
          <div>
            <a className="uk-button uk-button-secondary uk-button-small" href={this.state.folderLink}>Team Folder</a>
          </div>
          <div>
            <span className="horizontal-spacer"></span>
          </div>
          <div>
            <button className="uk-button uk-button-primary uk-button-small" onClick={this.toggleEditing.bind(this)}>{this.state.editing ? 'Done' : 'Edit'}</button>
          </div>
          <div>
            <span className="close-button-spacer"></span>
          </div>
        </div>
        
        {this.getBottomSection()}
        
      </div>
    );
  }
}

export default PortfolioPage;
