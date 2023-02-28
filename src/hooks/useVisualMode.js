import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    //replace mode with new mode
    if (replace) {
     return setHistory(prev => [...prev.slice(0, -1), newMode]);
    }
    setHistory(prev => [...prev, newMode]);
  }

  function back() {
    
    //avoid initial mode
    if (history.length === 1) {
      return;
    }
    //set new mode, update history state
    setHistory(prev => [...prev.slice(0, -1)]);
  }
  return {
    mode: history[history.length -1],
    transition,
    back,
  };
}
