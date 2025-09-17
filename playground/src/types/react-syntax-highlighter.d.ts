declare module 'react-syntax-highlighter' {
  import * as React from 'react';
  export const Light: any;
  export const Prism: any;
  const SyntaxHighlighter: any;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/*' {
  const content: any;
  export default content;
}
