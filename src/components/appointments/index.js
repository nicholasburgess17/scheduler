import React from "react";
//styles
import "components/appointments/styles.scss";

//components
import Header from "./header";
// import Confirm from "./confirm";
import Empty from "./empty";
import Show from "./show";
// import Status from "./status";
import Form from "./form";

//hooks
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"

  const { mode, transition, back } = useVisualMode(
    //if there is an interview, show it, else show empty
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* if empty, allow usage of create component */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {/* if there is an interview, use show component */}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {/* if mode is create, show form, allwo canelation using back function in useVisualMode */}
      {mode === CREATE && <Form
          name={props.name}
          value={props.value}
          interviewers={[]}
          onCancel={back}
        /> }
    </article>
  );
}
