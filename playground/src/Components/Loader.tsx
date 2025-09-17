'use client';

import React from 'react';
import { Collapse } from 'antd';
import { SquareLoader } from 'news-ui-library';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const { Panel } = Collapse;

const LoaderDemo: React.FC = () => {
  const codeString = `
import React from 'react';
import { SquareLoader } from 'news-ui-library';

const Loader = () => {
  return <SquareLoader />;
};

export default Loader;
  `;

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="All Type Loader" key="1">
        <SquareLoader />
      </Panel>

      <Panel header="Code" key="2">
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {codeString}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  );
};

export default LoaderDemo;
