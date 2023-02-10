import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    //default states of day, days and appointments
    day: "Monday",
    days: [],
    appointments: {},
  });
  //retrieve data from api
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      // sets state for days, appointments and interviewers from data in api
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  //retrieve appointments for a given day
  const setDay = (day) => setState({ ...state, day: day });
  //update spots for selected day
const updateSpots = (day, days, appointments) => {
  //find day object in days array
  const dayObj = days.find((d) => d.name === day);
  let spots = 0;

  for (const id of dayObj.appointments) {
    //get appointment id from appointment object
    const appointment = appointments[id];

    //if there is no interview, add to spots
    if (!appointment.interview) {
      spots++;
    } 
  }
  return spots
}


  //function to be passed down to each appointment as a prop, will change local state when an interview is booked
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    
    //update number of spots for given day
    const spots = updateSpots(state.day, state.days, appointments);
    // update the days object in state
    const days = state.days.map((day) => {
      if (day.name === state.day) {
        return { ...day, spots };
      }
      return day;
    });

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          appointments,
          days
        }));
      })
      .catch((err) => console.log(err));
  }

  function cancelInterview(id) {
    //set new states
    const interview = null;
    const appointment = { ...state.appointments[id], interview };
    const appointments = { ...state.appointments, [id]: appointment };

    //update number of spots for given day
    const spots = updateSpots(state.day, state.days, appointments);
    // update the days object in state
    const days = state.days.map((day) => {
      if (day.name === state.day) {
        return { ...day, spots };
      }
      return day;
    });

    //send to api
    return axios
      .delete(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          appointments,
          days
        }));
      })
      .catch((err) => console.log(err));
  }
  return { state, setDay, bookInterview, cancelInterview }
}
