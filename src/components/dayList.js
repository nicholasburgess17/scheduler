import React from "react";
import DayListItem from "./dayListItem";

export default function DayList(props) {
  console.log("DayList")
  console.log(props)

  const daysList = props.days.map((day) => {
    console.log(day)
    return <DayListItem 
      key={day.id} 
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={day.setDay}
      />;
  });
  return <ul>{daysList}</ul>;
}
