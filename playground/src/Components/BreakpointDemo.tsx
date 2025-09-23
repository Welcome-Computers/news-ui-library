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
  const { width, height, breakpoint, gutterpoint, is_mobile, is_tab, is_laptop } = useBreakpoint();

  const codeString = `
import { useBreakpoint } from 'news-ui-library';

const Demo = () => {
  const { width, breakpoint, gutterpoint, is_mobile, , is_tab, is_laptop } = useBreakpoint();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>height: {height}px</p>
      <p>Breakpoint: {breakpoint}</p>
      <p>Gutter: {gutterpoint}px</p>
      <p>is_mobile : {is_mobile} [true if < 768]</p>
      <p>is_tab : {is_laptop} [true if 768–991]</p>
      <p>is_laptop : {is_laptop} [true if 992–1199]</p>
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
            <strong>Height:</strong> <Tag color="blue">{height}px</Tag>
          </p>
          <p>
            <strong>Breakpoint:</strong> <Tag color="green">{breakpoint}</Tag>
          </p>
          <p>
            <strong>Gutter:</strong> <Tag color="purple">{gutterpoint}px</Tag>
          </p>
          <p>
            <strong>is_mobile:</strong> <Tag color="purple">{is_mobile}</Tag>
          </p>
          <p>
            <strong>is_tab:</strong> <Tag color="purple">{is_tab}</Tag>
          </p>
          <p>
            <strong>is_laptop:</strong> <Tag color="purple">{is_laptop}</Tag>
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
