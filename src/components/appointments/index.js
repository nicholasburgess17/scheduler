import React from "react";
import "components/appointments/styles.scss";
import Header from "./header";
// import Confirm from "./confirm";
import Empty from "./empty";
import Show from "./show";
// import Status from "./status";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
}
