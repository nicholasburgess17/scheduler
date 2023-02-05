import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const newHistory = [...history];


  function transition(newMode, replace = false) {
    console.log(`in transition fn, newMode = ${newMode}, replace = ${replace}`);
    //replace mode with new mode
    if (replace) {
      newHistory.pop();
    }
    //add new mode to stack
    setMode(newMode);
    // console.log(newMode);
    // console.log(...newHistory);
    setHistory([...newHistory, newMode]);
    // setHistory(newHistory);
    // console.log(newHistory);
  }
  function back() {
    console.log("going back");
    //avoid initial mode
    if (history.length === 1) {
      return;
    }

    //set new mode, update history state
    newHistory.pop();
    setMode(newHistory[newHistory.length - 1]);
    setHistory(newHistory);
  }

  return {
    mode,
    transition,
    back,
  };
}
