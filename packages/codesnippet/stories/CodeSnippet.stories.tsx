import * as React from "react";
import { CodeSnippet } from "../index";

const snippetContent = `cd ui-kit && npm start`;

export default {
  title: "Typography/Containers/CodeSnippet",
  component: CodeSnippet
};

export const Default = () => <CodeSnippet>{snippetContent}</CodeSnippet>;

export const TextToCopy = () => (
  <CodeSnippet textToCopy={snippetContent}>{snippetContent}</CodeSnippet>
);

export const TextToCopyWithOnCopyCallback = () => {
  const onCopyFn = () => {
    alert("oncopy");
  };
  return (
    <CodeSnippet textToCopy={snippetContent} onCopy={onCopyFn}>
      {snippetContent}
    </CodeSnippet>
  );
};

export const TextToCopyAndCustomTooltipContentOnCopy = () => (
  <CodeSnippet
    textToCopy={snippetContent}
    copyTooltipContent={`"${snippetContent}" copied`}
  >
    {snippetContent}
  </CodeSnippet>
);
