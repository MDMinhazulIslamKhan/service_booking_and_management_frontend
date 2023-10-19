"use client";
import { useGetFeedbacksQuery } from "@/redux/api/feedbackApi";
import { isLoggedIn } from "@/services/auth.service";
import { Button, Card, Col, Empty, Row } from "antd";
import Link from "next/link";
import React from "react";

const Feedback = () => {
  const { data, isLoading } = useGetFeedbacksQuery({ page: 1, limit: 12 });

  return (
    <>
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
        {data?.data?.data?.length !== 0 ? (
          data?.data?.data
            ?.slice(0, 9)
            .map((singleFeedback: any, index: number) => (
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
                  <p style={{ margin: "10px 0 0 0" }}>
                    {singleFeedback.feedback}
                  </p>
                </Card>
              </Col>
            ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ margin: "50px auto" }}
          />
        )}
      </Row>
      <div
        style={{
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        {isLoggedIn() && (
          <Link href={`/feedback`}>
            <Button
              style={{
                backgroundColor: "#fffbbd",
                color: "#b3a562",
                fontWeight: "bold",
                width: "200px",
              }}
            >
              Give your feedback
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Feedback;
