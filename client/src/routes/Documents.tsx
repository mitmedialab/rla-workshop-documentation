import * as React from 'react';

class Documents extends React.Component<any, any> {
  // <tr>
  //   <td className="limit-width"><a className="uk-button uk-button-primary" href="#">Pitch Workshop</a></td>
  //   <td>Some desc</td>
  // </tr>
  render() {
    return (
      <div className="uk-padding uk-section uk-section-secondary page-content">
        <table className="uk-table uk-table-small uk-table-middle">
          <tbody>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/open?id=1CFoO69vGhimnAozX2Gdl4WaIDNpVpH4H">Teams</a></td>
              <td>Names, members, and descriptions of all workshop teams</td>
            </tr>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/open?id=1CFoO69vGhimnAozX2Gdl4WaIDNpVpH4H">Sessions</a></td>
              <td>Slide decks and worksheets from throughout the week</td>
            </tr>
            <tr>
              <td className="limit-width"><a className="uk-button uk-button-primary document-button" href="https://drive.google.com/drive/folders/1bMuOHSuXzpQQ0ZqPuP07GCTaGuRlmMSq?usp=sharing">Learnings</a></td>
              <td>General notes from from field interviews and NGO discussions</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Documents;
