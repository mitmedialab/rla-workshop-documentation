import * as React from 'react';

import ScheduleTable from '../components/ScheduleTable';

class Schedule extends React.Component<any, any> {
  render() {
    // Today changed at the start of each day
    var today = 'Saturday';
    var days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    // Events to be filled with latest
    var events = {
      'Saturday': [
        ['4:30pm', '5:30pm', 'Team introductions', 'Brasserie @ Crowne Plaza Hotel'],
        ['6:00pm', '', 'Working dinner with NGOs', '	Tannoureen Restaurant'],
      ],
      'Sunday': [
        ['', '', 'Breakfast', 'Crown Plaza hotel'], 
        ['9:00am', '10:00am', 'Group time', 'Brasserie @ Crowne Plaza Hotel'], 
        ['10:00am', '4:00pm', 'Field visits', 'Molham, Jesuit Refugee Services, Ruwaad, Happiness Again, UNICEF'],
        ['6:00 pm', '', 'Debrief', 'Brasserie @ Crowne Plaza Hotel'],
        ['7:00 pm', '', 'Dinner', 'Brasserie @ Crowne Plaza Hotel']
      ],
      'Monday': [
        ['', '', 'Breakfast', 'Crown Plaza hotel'], 
        ['9:00am', '', 'Buses leave hotel', ''], 
        ['9:30am', '12:30pm', '"Speed dating" with NGOs', 'VBC'],
        ['12:30pm', '1:15pm', 'Lunch', 'VBC'],
        ['1:15pm', '2:45pm', 'Synthesis and prototyping', 'VBC'],
        ['2:45pm', '3:00pm', 'Introduction to office hours', 'VBC'],
        ['3:00pm', '6:00pm', 'Dinner', 'VBC'],
        ['', '', 'Buses back to hotel', '']
      ],
      'Tuesday': [
      ],
      'Wednesday': [
      ],
      'Thursday': [
      ],
      'Friday': [
      ],
    };
    return (
      <div className="uk-padding uk-section uk-section-muted">
        <ul uk-accordion="true">
          {days.map((day) => {
            return (
              <li key={day} className={(day == today) ? "uk-open" : ""}>
                <a className="uk-accordion-title" href="#">
                  {day + " "}
                  {(day == today) ? <span className="uk-label uk-label-warning">today</span> : ""}
                </a>
                <div className="uk-accordion-content"><ScheduleTable events={events[day]} /></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Schedule;
