import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# So goodbye old stuff? 👋

- Class components

- Container & Presentational components

- Higher Order Components

- Render props
`;
  return <MarkdownSlide markdown={markdown} />;
};
