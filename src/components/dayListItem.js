import React from "react";
import "components/dayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  let dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots

  })
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2>
      <h3 className={dayClass}>{props.spots} spots remaining</h3>
    </li>
  );
}
