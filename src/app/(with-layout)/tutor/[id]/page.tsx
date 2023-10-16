/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import maleTeacher from "../../../../assets/maleTeacher.png";
import femaleTeacher from "../../../../assets/femaleTeacher.png";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSingleTutorByUserQuery } from "@/redux/api/tutorApi";
const TutorDetails = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useSingleTutorByUserQuery(params.id);
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
          Tutor Details
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
                src={data?.gender == "male" ? maleTeacher : femaleTeacher}
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
                Full Name : {data?.fullName}
              </h4>
              <Row>
                <Col style={{ marginBottom: "20px" }} md={12}>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Gender:</span>{" "}
                    {data?.gender}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Qualification:</span>{" "}
                    {data?.qualification}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Institution:</span>{" "}
                    {data?.institution}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Group:</span>{" "}
                    {data?.group}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Subject:</span>{" "}
                    {data?.subject}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Medium:</span>{" "}
                    {data?.medium}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Present Address:</span>{" "}
                    {data?.presentAddress}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Current Status:</span>{" "}
                    {data?.currentStatus}
                  </p>
                </Col>
                <Col md={12}>
                  <div style={{ margin: "10px 0" }}>
                    <p style={{ fontWeight: "bold", display: "inline" }}>
                      Expert In:
                    </p>
                    {data?.expertIn?.map((ex: any, index: number) => (
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
                    {data?.preferredArea}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Preferred Medium:
                    </span>{" "}
                    {data?.preferredMedium}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Preferred Subject:
                    </span>{" "}
                    {data?.preferredSubject}
                  </p>{" "}
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Preferred Area:</span>{" "}
                    {data?.preferredClass}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Day Per Week:</span>{" "}
                    {data?.dayPerWeek}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Expected Minimum Salary:
                    </span>{" "}
                    {data?.expectedMinSalary}
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <span style={{ fontWeight: "bold" }}>Current Tuition:</span>{" "}
                    {data?.currentTuition}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={11} lg={6}>
            <Button
              style={{
                backgroundColor: "#c3ffbd",
                color: "#07b318",
                width: "100%",
              }}
            >
              <h5>Add to cart</h5>
            </Button>
          </Col>{" "}
          <Col span={11} lg={6}>
            <Button
              style={{
                backgroundColor: "#fffbbd",
                color: "#edd874",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              <Link href={`/tutor/order/${data?._id}`}>Order</Link>
            </Button>
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
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
              <span style={{ fontWeight: "bold" }}>Rating:</span> {data?.gender}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TutorDetails;
