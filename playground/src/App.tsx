'use client';

import React from "react";
import "antd/dist/reset.css"; // AntD CSS
import "@styles/index.scss";   // Your custom CSS
import { Tabs } from "antd";
import DemoNewsCards from "./Components/DemoNewsCards";
import Loader from "./Components/Loader";
import UserAvatar from "./Components/UserAvatar";
import BreakpointDemo from "./Components/BreakpointDemo";

const { TabPane } = Tabs;

export default function App() {
  return (
    <div style={{ padding: 50 }}>
      <Tabs defaultActiveKey="1" type="line">
        <TabPane tab="News Cards" key="1">
          <DemoNewsCards />
        </TabPane>
        <TabPane tab="Loader" key="2">
          <Loader />
        </TabPane>
        <TabPane tab="User Avatar" key="3">
          <UserAvatar />
        </TabPane>
        <TabPane tab="Breakpoints" key="4">
          <BreakpointDemo />
        </TabPane>
      </Tabs>
    </div>
  );
}
