import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition(transtitionMode, replace = false) {
    const newMode = [...mode];

    if (replace) {
      newMode.pop();
    };
    setMode(transtitionMode);
  };
  function back() {

  };

  return {
    mode,
    transition,
    back
  };
}
