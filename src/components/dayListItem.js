import React from "react";
import "components/dayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots remaining";
    }
    if (props.spots === 1) {
      return "1 spot remaining";
    }
    return `${props.spots} spots remaining`;
  };
  return (
    <li onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className={dayClass}>{props.name}</h2>
      <h3 className={dayClass}>{formatSpots()}</h3>
    </li>
  );
}
