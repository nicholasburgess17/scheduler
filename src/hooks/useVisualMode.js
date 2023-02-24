import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const newHistory = [...history];

  function transition(newMode, replace = false) {
    
    //replace mode with new mode
    if (replace) {
      newHistory.pop();
    }
    //add new mode to stack
    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  }

  function back() {
    
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
