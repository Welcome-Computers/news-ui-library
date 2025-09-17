/* eslint-disable @next/next/no-img-element */
import { Col, Collapse, Row, Tabs } from "antd";
import { NewsCard } from "news-ui-library";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const { TabPane } = Tabs;
const { Panel } = Collapse;

const dummyItem = {
  slug: "breaking-news",
  title: "Breaking News: Demo Title for NewsCard",
  is_exclusive: true,
  news_date: "2025-09-07",
  summary: `The city witnessed a remarkable event today as leaders, experts, and citizens 
gathered to discuss future opportunities. The initiative focused on innovation, 
sustainability, and growth, drawing attention from across the nation.`,
  articleCategories: [
    { category: { id: 1, name: "Politics" } },
    { category: { id: 2, name: "Sports" } },
    { category: { id: 3, name: "Technology" } },
  ],
};

const allTypes = [
  { card: "default", width: "350px" },
  { card: "type-5", width: "600px" },
  { card: "type-6", width: "350px" },
  { card: "type-13", width: "1130px" },
  { card: "type-2", width: "720px" },
  { card: "type-3", width: "360px" },
  { card: "type-4", width: "360px" },
  { card: "type-15", width: "450px" },
  { card: "type-10", width: "400px" },
  { card: "type-9", width: "270px" },
  { card: "type-11", width: "290px" },
  { card: "type-7", width: "290px" },
  { card: "type-14", width: "300px" },
  { card: "type-1", width: "250px" },
  { card: "type-8", width: "250px" },
  { card: "type-12", width: "310px" },
];

const DemoNewsCardsWithTabs = () => {
  const codeString = `
import { Col, Row } from "antd";
import { NewsCard } from "news-ui-library";

const dummyItem = {
    slug: "breaking-news",
    title: "Breaking News: Demo Title for NewsCard",
    is_exclusive: true,
    news_date: "2025-09-07",
    summary: "The city witnessed a remarkable event today as leaders, experts, and citizens 
gathered to discuss future opportunities. The initiative focused on innovation, 
sustainability, and growth, drawing attention from across the nation.",

    articleCategories: [
        { category: { id: 1, name: "Politics" } },
        { category: { id: 2, name: "Sports" } },
        { category: { id: 3, name: "Technology" } },
    ],
};

const allTypes = [
    { card: "default", width: "350px" },
    { card: "type-5", width: "600px" },
    { card: "type-6", width: "350px" },
    { card: "type-13", width: "1130px" },
    { card: "type-2", width: "720px" },
    { card: "type-3", width: "360px" },
    { card: "type-4", width: "360px" },
    { card: "type-15", width: "450px" },
    { card: "type-10", width: "400px" },
    { card: "type-9", width: "270px" },
    { card: "type-11", width: "290px" },
    { card: "type-7", width: "290px" },
    { card: "type-14", width: "300px" },
    { card: "type-1", width: "250px" },
    { card: "type-8", width: "250px" },
    { card: "type-12", width: "310px" },
];

const DemoNewsCards = () => {
  return (
    <div style={{ padding: "20px" }}>
      {allTypes.map((type, index) => {
        const item = { ...dummyItem, id: index + 1, article_image: "...", reporter: {...} };
        return (
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={3} md={3} key={\`\${type.card}-\${index}\`}>
              <h3>{type.card} [width: {type.width}]</h3>
            </Col>
            <Col xs={24} sm={21} md={21} key={\`\${type.card}-\${index}\`}>
              <div style={{ marginBottom: "20px", width: type.width, border: "1px solid #ccc", padding: "15px" }}>
                <NewsCard item={item} type={type.card} />
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default DemoNewsCards;
`;

  return (

    <Collapse defaultActiveKey={['1']}>
      <Panel header="Welcome News-Card Demo Page" key="1">
          <div style={{ padding: "20px" }}>
          {allTypes.map((type, index) => {
            const item = {
              ...dummyItem,
              id: index + 1,
              article_image: `https://picsum.photos/600/400?random=${index + 1}`,
              reporter: {
                id: index + 1,
                first_name: `John${index + 1}`,
                last_name: `Doe${index + 1}`,
                profile_pick: `https://i.pravatar.cc/150?img=${index + 1}`,
              },
            };

            return (
              <Row gutter={[16, 24]} key={index}>
                <Col xs={24} sm={3} md={3}>
                  <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                    {type.card} [width : {type.width}]
                  </h3>
                </Col>
                <Col xs={24} sm={21} md={21}>
                  <div
                    style={{
                      marginBottom: "20px",
                      width: type.width,
                      border: "1px solid #ccc",
                      padding: "15px",
                    }}
                  >
                    <NewsCard item={item} type={type.card as any} />
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Panel>

      <Panel header="Code" key="2">
        <SyntaxHighlighter language="jsx" style={oneDark}>
           {codeString}
        </SyntaxHighlighter>
      </Panel>
    </Collapse>
  );
};

export default DemoNewsCardsWithTabs;
