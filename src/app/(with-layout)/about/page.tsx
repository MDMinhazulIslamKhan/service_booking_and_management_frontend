import React from "react";
import { Card } from "antd";

const About = () => {
  return (
    <div>
      <Card bordered={true} style={{ padding: "20px", margin: "20px" }}>
        <div>
          <h1 style={{ marginTop: "20px", textAlign: "center" }}>
            Md. Minhazul Islam Khan
          </h1>
          <h2 style={{ margin: "5px", textAlign: "center" }}>
            Fullstack developer
          </h2>
          <Card>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "1rem",
                width: "100%",
                marginLeft: "auto",
              }}
            >
              <h3 style={{ marginLeft: "auto", marginRight: "auto" }}>
                Email:
              </h3>
              <a
                href="mailto:minhazulislamkhan@gmail.com"
                target="_blank"
                style={{ color: "black" }}
              >
                minhazulislamkhan@gmail.com
              </a>
              <h3 style={{ marginLeft: "auto", marginRight: "auto" }}>
                Contact:
              </h3>
              <a
                href="tel:+8801521438469"
                target="_blank"
                style={{ color: "black" }}
              >
                +8801521438469
              </a>
              <h3 style={{ marginLeft: "auto", marginRight: "auto" }}>
                Skills:
              </h3>
              <div>
                <ul>
                  <li>JavaScript | ES6</li>
                  <li>TypeScript</li>
                  <li>Node.Js | Express.js</li>
                  <li>NoSQL Database (Mongodb,Mongoose)</li>
                  <li>MySQL Database</li>
                  <li>React.Js</li>
                  <li>Next.Js</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default About;
