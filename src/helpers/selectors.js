export  function getAppointmentsForDay(state, day) {
  //find day that matches, returns object 
  const matchDay = state.days.find((days) => days.name === day);

  //if not matching, return an empty array
  if (!matchDay) {
    return [];
  }

  // returns an array of appointment ids for day
  const appointmentIDs = matchDay.appointments;

  // returns an array wehere appointmentIDs is replaced with the correct appointment details
  const appointmentList = appointmentIDs.map((id) => state.appointments[id]);
  return appointmentList;
}

//appointment object structure post transformation via application component
// {  
//   "student": "Lydia Miller-Jones",
//   "interviewer": {  
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }
export function getInterview(state, interview) {
  // if no interview found, return null
  if (!interview) {
    return null;
  }

  const id = interview.interviewer;

  // if id is a match returns interview object with interviewer details
  if (state.interviewers[id]) {
    return {
      student: interview.student,
      interviewer: state.interviewers[id],
    };
  }
}