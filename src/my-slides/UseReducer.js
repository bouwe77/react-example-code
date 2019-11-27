import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useReducer HOOK

useState on steroids... 💪

A more functional approach to state management
    `;
  return <MarkdownSlide markdown={markdown} />;
};
