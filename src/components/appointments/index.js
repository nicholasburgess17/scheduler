import React from "react";
//styles
import "components/appointments/styles.scss";

//components
import Header from "./header";
import Confirm from "./confirm";
import Empty from "./empty";
import Show from "./show";
import Status from "./status";
import Form from "./form";

//hooks
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const SAVING = "SAVING"
  const CONFIRM = "CONFIRM"
  const DELETE = "DELETE"
  const EDIT = "EDIT"
  const ERROR_SAVE ="ERROR_SAVE"
  const ERROR_DELETE="ERROR_DELETE"

  const { mode, transition, back } = useVisualMode(
    //if there is an interview, show it, else show empty
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING)
    props
      .bookInterview(props.id, interview)
      .then((res) => transition(SHOW))
      .catch((err) => transition(ERROR_SAVE, true));
  }

  function cancel() {
    transition(DELETE, true)
    props
    .cancelInterview(props.id)
    .then((res) => transition(EMPTY))
    .catch((err) => transition(ERROR_DELETE, true))
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* if empty, allow usage of create component */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETE && <Status message ="DELETING" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={back}
          onConfirm={cancel}
        />
      )}
      {/* if there is an interview, use show component */}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)} 
        />
      )}
      {/* if mode is create, show form, allwo canelation using back function in useVisualMode */}
      {mode === CREATE && <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          interviewer={props.interviewers.interviewer}
          onCancel={back}
          onSave={save}
        /> }
        {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onCancel={back}
          onSave={save}
        />
      )}
    </article>
  );
}
