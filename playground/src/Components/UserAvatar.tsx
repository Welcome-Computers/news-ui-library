'use client';

import React from 'react';
import { Collapse } from 'antd';
import { CommonAvatar } from 'news-ui-library';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const { Panel } = Collapse;

const UserAvatarAccordion: React.FC = () => {
  const codeString = `
import CommonAvatar from './CommonAvatar';

const Demo = () => {
  return (
    <div>
      <CommonAvatar name="John Doe" size={60} />
      <CommonAvatar src="https://i.pravatar.cc/150?img=10" size={60} />
      <CommonAvatar size={60} />
      <CommonAvatar name="Alice Smith" size={80} />
    </div>
  );
};

export default Demo;
  `;

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="Common Avatar Demo" key="1">
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <CommonAvatar name="John Doe" size={60} />
          <CommonAvatar src="https://i.pravatar.cc/150?img=10" size={60} />
          <CommonAvatar size={60} />
          <CommonAvatar name="Alice Smith" size={80} />
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

export default UserAvatarAccordion;
