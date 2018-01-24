import * as React from 'react';

import ScheduleTable from '../components/ScheduleTable';

class Schedule extends React.Component<any, any> {
  render() {
    // Today changed at the start of each day
    var today = 'Wednesday';
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
        ['3:00pm', '6:00pm', 'Build + office hours', 'VBC'],
        ['6:00pm', '', 'Dinner', 'VBC'],
        ['', '', 'Buses back to hotel', '']
      ],
      'Tuesday': [
        ['', '', 'Breakfast', 'Crown Plaza hotel'],
        ['9:00am', '', 'Buses leave hotel', ''],
        ['9:30am', '12:00pm', 'Build', 'VBC'],
        ['12:00pm', '1:00pm', 'Lunch', 'VBC'],
        ['1:00pm', '4:00pm', 'Pitch workshop with IRC', 'VBC'],
        ['4:00pm', '7:00pm', 'Reception', 'VBC'],
        ['', '', 'Buses back to hotel', '']
      ],
      'Wednesday': [
        ['', '', 'Breakfast', 'Crown Plaza hotel'],
        ['9:00am', '', 'Buses leave hotel', ''],
        ['9:30am', '12:00pm', 'Build', 'VBC'],
        ['12:30pm', '1:15pm', 'Lunch', 'VBC'],
        ['1:15pm', '2:00pm', 'Looking forward to Phase 3', 'VBC'],
        ['2:00pm', '6:00pm', 'Build + office hours', 'VBC'],
        ['6:00pm', '', 'Dinner', 'VBC'],
        ['', '', 'Buses back to hotel', '']
      ],
      'Thursday': [
        ['', '', 'Breakfast', 'Crown Plaza hotel'],
        ['9:00am', '', 'Buses leave hotel', ''],
        ['9:30am', '12:00pm', 'Build', 'VBC'],
        ['12:30pm', '1:15pm', 'Lunch', 'VBC'],
        ['1:15pm', '2:00pm', 'Expert sessions with Vahid Alice, and Noor', 'VBC'],
        ['2:00pm', '6:00pm', 'Build + office hours', 'VBC'],
        ['6:00pm', '', 'Dinner', 'VBC'],
        ['', '', 'Buses back to hotel', '']
      ],
      'Friday': [
        ['', '', 'Breakfast', 'Crown Plaza hotel'],
        ['9:00am', '', 'Buses leave hotel', ''],
        ['9:30am', '12:00pm', 'Build', 'VBC'],
        ['12:30pm', '1:30pm', 'Lunch', 'VBC'],
        ['1:30pm', '4:00pm', 'Pitches + Closing ceremony', 'VBC'],
        ['4:00pm', '6:00pm', 'Reception', 'VBC'],
        ['', '', 'Buses back to hotel', '']
      ],
    };
    return (
      <div className="uk-padding uk-section uk-section-muted page-content">
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
