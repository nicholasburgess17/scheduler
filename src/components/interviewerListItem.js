import React from "react";
import "components/interviewerListItem.scss"
import classNames from "classnames";

export default function InterviewerListItem(props) {
  let interviewerClass = {};
  return (
    <li className="interviewers__item">
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
}
