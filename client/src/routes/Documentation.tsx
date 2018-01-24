import * as React from 'react';
import * as $ from 'jquery';

class Documentation extends React.Component<any, any> {
  
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
        <h3 className="uk-heading-divider">General Documents</h3>
        <table className="uk-table uk-table-small uk-table-middle">
          <tbody>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://docs.google.com/document/d/1fpsN_GjN3AvPcR5qCf06SAV7nBPgri8ivdW7WiVSiaQ/edit?usp=sharing">Teams</a></td>
              <td>Names, members, and descriptions of all workshop teams</td>
            </tr>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://photos.app.goo.gl/2g2icneiD2ZRBMmD2">Photos</a></td>
              <td>Add your photos from throughout the week!</td>
            </tr>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/open?id=1CFoO69vGhimnAozX2Gdl4WaIDNpVpH4H">Sessions</a></td>
              <td>Slide decks and worksheets from throughout the week</td>
            </tr>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/drive/folders/1bMuOHSuXzpQQ0ZqPuP07GCTaGuRlmMSq?usp=sharing">NGO Field Visits</a></td>
              <td>Notes from from field interviews and NGO discussions</td>
            </tr>
          </tbody>
        </table>
      
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

export default Documentation;
