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
        this.componentWillMount();
      }, 500);
    });
  }
  
  render() {
    return (
      <div className="uk-padding uk-section uk-section-secondary page-content">        
        <h3 className="uk-heading-divider">General Documents</h3>
        <table className="uk-table uk-table-small uk-table-responsive uk-table-middle">
          <tbody>
            <tr>
              <td>Names, members, and descriptions of all workshop teams</td>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://docs.google.com/document/d/1fpsN_GjN3AvPcR5qCf06SAV7nBPgri8ivdW7WiVSiaQ/edit?usp=sharing">Teams</a></td>
            </tr>
            <tr>
              <td>Slides from all teams' pitch presentations on Friday</td>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/drive/folders/1m5PJBaLYNOXBypAeL2zh12tq4QHix2Sh?usp=sharing">Presentations</a></td>
            </tr>
            <tr>
              <td>Slide decks and worksheets from throughout the week</td>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/open?id=1CFoO69vGhimnAozX2Gdl4WaIDNpVpH4H">Sessions</a></td>
            </tr>
            <tr>
              <td>Notes from from field interviews and NGO discussions</td>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/drive/folders/1bMuOHSuXzpQQ0ZqPuP07GCTaGuRlmMSq?usp=sharing">NGO Field Visits</a></td>
            </tr>
            <tr>
              <td>Anonymous feedback on the workshop overall</td>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://docs.google.com/forms/d/e/1FAIpQLSc4o4pkAbTFvsgwbTq56DGU1QzR36JMXqdbEKIIppfdO2gSNA/viewform">Feedback</a></td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="uk-heading-divider">Photos</h3>
        <div>
          <div>Add your photos from throughout the week! Use your preferred method, we'll merge later.</div>
          <div className="small-spacer"></div>
          <a className="uk-button uk-button-primary photos-button" href="https://photos.app.goo.gl/2g2icneiD2ZRBMmD2">Google Photos</a> <a className="uk-button uk-button-primary photos-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdYlIOzqfRZ-w5_i0P7V6CCv-D6GCsmIDhTLIIMMQW2Kou3BA/viewform">iCloud Photos</a> <a className="uk-button uk-button-primary photos-button" href="https://drive.google.com/drive/folders/1xUVIgWBOdj5GUI9s0gb9a7GFR0yiZ91N?usp=sharing">Google Drive</a>
        </div>
      
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
          <input className="team-name-input uk-input uk-form-width-large" type="text" placeholder="Enter team name..." onChange={this.handleChange.bind(this)} value={this.state.folderName}/> <button className="team-name-input uk-button uk-button-primary" onClick={this.handleClick.bind(this)}>Create Team Folder</button>
        </div>
      </div>
    );
  }
}

export default Documentation;
