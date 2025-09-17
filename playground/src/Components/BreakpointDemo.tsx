'use client';

import React from 'react';
import { Collapse, Tag } from 'antd';
import { useBreakpoint } from 'news-ui-library';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const { Panel } = Collapse;

const BreakpointDemo: React.FC = () => {
  const { width, breakpoint, gutterpoint } = useBreakpoint();

  const codeString = `
import { useBreakpoint } from 'news-ui-library';

const Demo = () => {
  const { width, breakpoint, gutterpoint } = useBreakpoint();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Breakpoint: {breakpoint}</p>
      <p>Gutter: {gutterpoint}px</p>
    </div>
  );
};

export default Demo;
  `;

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="useBreakpoint Demo" key="1">
        <div style={{ padding: 20, border: "1px solid #eee", borderRadius: 8 }}>
          <p>
            <strong>Width:</strong> <Tag color="blue">{width}px</Tag>
          </p>
          <p>
            <strong>Breakpoint:</strong> <Tag color="green">{breakpoint}</Tag>
          </p>
          <p>
            <strong>Gutter:</strong> <Tag color="purple">{gutterpoint}px</Tag>
          </p>
          <p style={{ marginTop: 10, fontSize: 12, color: "#888" }}>
            Resize your browser window to see values change 👆
          </p>
        </div>
      </Panel>

      <Panel header="Code" key="2">
        <SyntaxHighlighter language="tsx" style={oneDark}>
          {codeString}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  );
};

export default BreakpointDemo;
