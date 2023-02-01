import DayList from "components/dayList";

export function getAppointmentsForDay(state, day) {

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
