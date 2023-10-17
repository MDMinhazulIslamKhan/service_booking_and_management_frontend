/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import maleTeacher from "../../../../assets/maleTeacher.png";
import femaleTeacher from "../../../../assets/femaleTeacher.png";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useTutorOwnProfileQuery } from "@/redux/api/tutorApi";
const TutorProfile = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useTutorOwnProfileQuery();
  return (
    <div>
      <Card bodyStyle={{ padding: "20px", overflow: "hidden" }}>
        <h4
          style={{
            textAlign: "center",
            fontSize: "30px",
            margin: "10px 0",
            backgroundColor: "white",
          }}
        >
          My Profile
        </h4>
        <Row
          justify="center"
          style={{ backgroundColor: "white", padding: "10px" }}
          align="middle"
        >
          <Col sm={12} md={9} lg={8}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: "100%" }}
                src={data?.data?.gender == "male" ? maleTeacher : femaleTeacher}
                width={300}
                alt="login image"
              />
            </div>
          </Col>
          <Col sm={12} md={15} lg={16}>
            <div
              style={{
                width: "100%",
              }}
            >
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  margin: "10px 60px 20px 0",
                  backgroundColor: "white",
                }}
              >
                Full Name : {data?.data?.fullName}
              </h4>
              <Row>
                <Col style={{ marginBottom: "20px" }} md={12}>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Gender:</span>{" "}
                    {data?.data?.gender}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Qualification:</span>{" "}
                    {data?.data?.qualification}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Institution:</span>{" "}
                    {data?.data?.institution}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Group:</span>{" "}
                    {data?.data?.group}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Subject:</span>{" "}
                    {data?.data?.subject}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Medium:</span>{" "}
                    {data?.data?.medium}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Present Address:</span>{" "}
                    {data?.data?.presentAddress}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Current Status:</span>{" "}
                    {data?.data?.currentStatus}
                  </p>
                </Col>
                <Col md={12}>
                  <div style={{ margin: "10px 0" }}>
                    <p style={{ fontWeight: "bold", display: "inline" }}>
                      Expert In:
                    </p>
                    {data?.data?.expertIn?.map((ex: any, index: number) => (
                      <span
                        style={{ marginLeft: "15px", color: "gray" }}
                        key={index}
                      >
                        "{ex}"
                      </span>
                    ))}
                  </div>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Preferred Class:</span>{" "}
                    {data?.data?.preferredArea}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Preferred Medium:
                    </span>{" "}
                    {data?.data?.preferredMedium}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Preferred Subject:
                    </span>{" "}
                    {data?.data?.preferredSubject}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Preferred Area:</span>{" "}
                    {data?.data?.preferredClass}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Day Per Week:</span>{" "}
                    {data?.data?.dayPerWeek}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Expected Minimum Salary:
                    </span>{" "}
                    {data?.data?.expectedMinSalary}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Current Tuition:</span>{" "}
                    {data?.data?.currentTuition}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "20px 0 5px",
          backgroundColor: "white",
        }}
      >
        Tutors Review
      </h4>
      <Row
        justify="center"
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "20px",
        }}
        align="middle"
        gutter={[10, 24]}
      >
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            hoverable
            style={{
              width: 180,
              background: "#f7f7e6",
              padding: "0",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ajsdasdj name
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>ahsudiuasdh review</p>{" "}
            <p style={{ margin: "10px 0" }}>
              <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
              {data?.data?.gender}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TutorProfile;
