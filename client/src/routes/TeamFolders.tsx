import * as React from 'react';
import * as $ from 'jquery';

class TeamFolders extends React.Component<any, any> {
  
  constructor(props){
    super(props);
    
    this.state = { 
      'folders': [],
      'folderName': ''
    };
  }
  
  
  componentWillMount() {
    $.get('/teamfolders').then((folders) => {
      this.setState({'folders': folders})
    });
  }
  
  handleChange(e) {
    this.setState({'folderName': e.target.value});
  }
  
  handleClick() {
    $.post('/teamfolder', {'name': this.state.folderName}).then((response) => {
      setTimeout(() => {
        location.reload();        
      }, 1000);
    });
  }
  
  render() {
    return (
      <div className="uk-padding uk-section uk-section-secondary page-content">        
        <h3 className="uk-heading-divider">Team Folders</h3>
        <div>
          <div className="folder-button-container">
            {this.state.folders.map((folder) => {
              return (
                <a key={folder[0]} className="uk-button uk-button-primary folder-button" href={folder[1]}>{folder[0]}</a>
              );
            })}
          </div>
        </div>
        
        <h3 className="uk-heading-divider">New Folder</h3>
        <div>Create a new folder if your team doesn't have a folder yet:</div>
        <div className="small-spacer"></div>
        <div>
          <input className="uk-input uk-form-width-large" type="text" placeholder="Enter team name..." onChange={this.handleChange.bind(this)} value={this.state.folderName}/> <button className="uk-button uk-button-primary" onClick={this.handleClick.bind(this)}>Create Team Folder</button>
        </div>
      </div>
    );
  }
}

export default TeamFolders;
