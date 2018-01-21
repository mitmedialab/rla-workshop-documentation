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
              <td className="limit-width"><a className="uk-button uk-button-primary" href="https://drive.google.com/drive/folders/14d8G6Q1aWkhHrHbOMju0Hh8XglqZLVjz?usp=sharing">Field Day</a></td>
              <td>Documents from Sunday's field visits</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Documents;
