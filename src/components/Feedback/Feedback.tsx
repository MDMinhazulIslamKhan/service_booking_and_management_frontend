"use client";
import { useGetFeedbacksQuery } from "@/redux/api/feedbackApi";
import { Card, Col, Row } from "antd";
import React from "react";

const Feedback = () => {
  const { data, isLoading } = useGetFeedbacksQuery({ page: 1, size: 12 });

  return (
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
      {data?.data?.data?.map((singleFeedback: any, index: number) => (
        <Col key={index} sm={12} md={6} lg={4} className="gutter-row">
          <Card
            hoverable
            style={{
              width: 170,
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
              {singleFeedback.name}
            </h2>
            <p style={{ margin: "10px 0 0 0" }}>{singleFeedback.feedback}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Feedback;
