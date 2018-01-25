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
        if (markdown.startsWith('<!DOCTYPE html>')) markdown = '';
        
        var folderLink = folders.filter((folder) => {
          return (folder[0].toLowerCase() == name.toLowerCase());
        })[0][1];
        
        console.log(this.state.imageLinks);
                
        this.setState({
          'name': name,
          'markdown': markdown,
          'folderLink': folderLink,
          'imageLinks': [],
          'editing': false
        });
      });
    });
  }
  
  handleMarkdownChange(e) {
    this.setState({'markdown': e.target.value});
    this.handleMarkdownSave();
  }
  
  handleMarkdownSave() {
    $.post('/teammarkdown', {
      'markdown': this.state.markdown,
      'name': this.state.name
    });
    
  }
  
  getMarkdownSection() {
    if (this.state.editing) {    
      return (
        <div className="markdown-grid uk-child-width-expand@s" uk-grid="true">
          <div><ReactMarkdown className="markdown-container" source={this.state.markdown} /></div>
          <div><textarea 
            className="uk-textarea markdown-textarea"
            onChange={this.handleMarkdownChange.bind(this)}
            value={this.state.markdown}></textarea></div>
        </div>
      )
    } else {
      return (
        <div><ReactMarkdown className="markdown-container" source={this.state.markdown} /></div>
      )
    }
  }
  
  getPhotosSection() {
    return (<div></div>);
    // return (
    //   <div>
    //     <hr className="uk-divider-icon" />
    // 
    //     <div className="uk-position-relative uk-visible-toggle" uk-slideshow="animation: push; autoplay:true; ratio: 7:3; autoplay-interval: 3000">
    //       <ul className="uk-slideshow-items">
    //         {this.state.imageLinks.map((link) => {
    //           console.log(link);
    //           return (
    //             <li key={link}>
    //               <img src={link} alt="" uk-cover="true" />
    //             </li>
    //           )
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // );
  }
  
  toggleEditing() {
    this.setState({'editing': !this.state.editing});
  }
  
  render() {
    return (
      <div>
        
        <div className="portfolio-header-container">
          <div className="portfolio-header-left">
            <h1>{this.state.name}</h1>
          </div>
          <div>
            <a className="uk-button uk-button-primary uk-button-small" href={this.state.folderLink}>Team Folder</a>
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
        
        {this.getMarkdownSection()}
        
        {this.getPhotosSection()}
      </div>
    );
  }
}

export default PortfolioPage;
