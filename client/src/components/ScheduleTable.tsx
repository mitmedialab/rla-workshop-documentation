import * as React from 'react';

class ScheduleTable extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div className="uk-background-secondary uk-light uk-padding">
          <table className="uk-table uk-table-divider uk-table-small uk-table-justify">
            <thead>
              <tr>
                <th className="uk-width-small">Start Time</th>
                <th className="uk-width-small">End Time</th>
                <th>Event</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {this.props.events.map((event) => {
                return (
                  <tr key={event[2]}>
                    <td>{event[0]}</td>
                    <td>{event[1]}</td>
                    <td>{event[2]}</td>
                    <td>{event[3]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ScheduleTable;
