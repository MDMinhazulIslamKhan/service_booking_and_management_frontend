import React from "react";
import welcomeImg from "../../../assets/Welcome.png";
import CollegeTeacher from "../../../assets/CollegeTeacher.png";
import IeltsTeacher from "../../../assets/IeltsTeacher.png";
import SchoolTeacher from "../../../assets/SchoolTeacher.png";
import Image from "next/image";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import AllTutors from "@/components/Tutors/Tutors";
import Feedback from "@/components/Feedback/Feedback";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
          textAlign: "center",
          fontWeight: "bolder",
          marginBottom: "0",
        }}
      >
        Welcome to My Tutor
      </h1>
      <h4
        style={{
          textAlign: "center",
          fontSize: "25px",
          margin: "20px 0",
        }}
      >
        We Provide best quality tutor and tuition in you area
      </h4>
      <div
        style={{
          width: "100%",
        }}
      >
        <Image
          style={{ width: "100%" }}
          width={600}
          src={welcomeImg}
          alt="banner"
        />
      </div>{" "}
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "20px 0 5px",
          backgroundColor: "white",
        }}
      >
        Our Services
      </h4>
      <Row
        justify="center"
        style={{ backgroundColor: "white", padding: "20px 30px 20px 20px" }}
        align="middle"
      >
        <Col xs={15} sm={10} lg={8}>
          <Card
            hoverable
            style={{ width: 240, margin: "0 auto" }}
            cover={
              <Image
                alt="SchoolTeacher"
                src={SchoolTeacher}
                width={200}
                height={200}
              />
            }
          >
            <Meta
              title="School Teacher"
              description="See our best School teacher for your children. Our tutors will take great care to make your child a successful person."
            />
            <Link href="/all-tutor?preferClass=1-10">
              <Button
                style={{
                  backgroundColor: "#fffbbd",
                  color: "#b3a562",
                  fontWeight: "bold",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <h5>See All</h5>
              </Button>
            </Link>{" "}
          </Card>
        </Col>
        <Col xs={15} sm={10} lg={8}>
          <Card
            hoverable
            style={{ width: 240, margin: "30px auto" }}
            cover={
              <Image
                alt="CollegeTeacher"
                src={CollegeTeacher}
                width={200}
                height={200}
              />
            }
          >
            <Meta
              title="College Teacher"
              description="Experienced and best qualities of college teacher from wellknown universities. To clear your basic, quickly find a best tutor for you."
            />{" "}
            <Link href="/all-tutor?preferClass=11-12">
              <Button
                style={{
                  backgroundColor: "#fffbbd",
                  color: "#b3a562",
                  fontWeight: "bold",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <h5>See All</h5>
              </Button>
            </Link>{" "}
          </Card>
        </Col>
        <Col xs={15} sm={10} lg={8}>
          <Card
            hoverable
            style={{ width: 240, margin: "0 auto" }}
            cover={
              <Image
                alt="IeltsTeacher"
                src={IeltsTeacher}
                width={200}
                height={200}
              />
            }
          >
            <Meta
              title="IELTS Teacher"
              description="Finding Experienced teacher or new to teaching IELTS, our tutor will help you guide through the IELTS test and achieve success.."
            />
            <Link href="/all-tutor?preferClass=IELTS">
              <Button
                style={{
                  backgroundColor: "#fffbbd",
                  color: "#b3a562",
                  fontWeight: "bold",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <h5>See All</h5>
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "20px 0 5px",
          backgroundColor: "white",
        }}
      >
        Our Tutors
      </h4>
      <AllTutors />
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "20px 0 5px",
          backgroundColor: "white",
        }}
      >
        Feedback
      </h4>
      <Feedback />
    </div>
  );
};

export default Home;
