"use client";
import React from "react";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import maleTeacher from "../../../../../assets/maleTeacher.png";
import femaleTeacher from "../../../../../assets/femaleTeacher.png";
import { useGetAllTutorsByAdminQuery } from "@/redux/api/tutorApi";
import Link from "next/link";

const AllTutorsForAdmin = () => {
  const { data, isLoading } = useGetAllTutorsByAdminQuery({
    page: 1,
    size: 10,
  });

  return (
    <>
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "0 5px 10px 5px",
          backgroundColor: "white",
        }}
      >
        All Tutors
      </h4>{" "}
      <Row
        justify="center"
        style={{ backgroundColor: "white", padding: "20px 30px 20px 20px" }}
        align="middle"
      >
        {data?.data?.data?.map((singleData: any, index: number) => (
          <Col key={index} md={15} lg={8}>
            <Card
              hoverable
              style={{ width: 240, margin: "0 auto 15px auto" }}
              cover={
                <Image
                  alt="tutorImage"
                  src={
                    singleData.gender == "male" ? maleTeacher : femaleTeacher
                  }
                  width={200}
                  height={200}
                />
              }
            >
              <h2
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {singleData.fullName}
              </h2>
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold" }}>Institution:</span>{" "}
                {singleData.institution}
              </p>
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold" }}>Medium:</span>{" "}
                {singleData.medium}
              </p>
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold" }}>Preferred Subject:</span>{" "}
                {singleData.preferredSubject}
              </p>
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold" }}>Preferred Class:</span>{" "}
                {singleData.preferredClass}
              </p>
              <p style={{ margin: "10px 0" }}>
                <span style={{ fontWeight: "bold" }}>Expected Salary:</span>{" "}
                {singleData.expectedMinSalary}
              </p>
              <Row justify="space-between">
                <Col span={11}>
                  {" "}
                  <Link href={`/dashboard/update-tutor/${singleData._id}`}>
                    <Button
                      style={{
                        backgroundColor: "#c3ffbd",
                        color: "#07b318",
                        width: "100%",
                      }}
                    >
                      <h5>Update</h5>
                    </Button>
                  </Link>{" "}
                </Col>{" "}
                <Col span={11}>
                  <Link href={`/dashboard/tutor/${singleData._id}`}>
                    {" "}
                    <Button
                      style={{
                        backgroundColor: "#fffbbd",
                        color: "#edd874",
                        fontWeight: "bold",
                        width: "100%",
                      }}
                    >
                      Details
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllTutorsForAdmin;
