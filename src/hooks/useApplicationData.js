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
    // console.log(id, interview);
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          appointments,
        }));
      })
      .catch((err) => console.log(err));
  }

  function cancelInterview(id) {
    //set new states
    const interview = null;
    const appointment = { ...state.appointments[id], interview };
    const appointments = { ...state.appointments, [id]: appointment };

    //send to api
    return axios
      .delete(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          appointments,
        }));
      })
      .catch((err) => console.log(err));
  }
  return { state, setDay, bookInterview, cancelInterview }
}
