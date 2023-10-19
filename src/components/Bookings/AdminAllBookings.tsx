import { Button, Card, Col, Row, message } from "antd";
import Link from "next/link";

const AdminAllBookings = (data: any) => {
  return (
    <Card
      hoverable
      style={{
        width: 280,
        margin: "0 auto 0 auto",
        backgroundColor: "#f3f4de",
      }}
    >
      <h3 style={{ margin: "10px 0", textAlign: "center" }}>
        {data?.data?.userId?.fullName}
      </h3>
      <h3
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        Conditions
      </h3>
      <p style={{ margin: "10px 0" }}>
        <span style={{ fontWeight: "bold" }}>Booking Status:</span>{" "}
        {data?.data?.status}
      </p>
      <p style={{ margin: "10px 0" }}>
        <span style={{ fontWeight: "bold" }}>Start Date:</span>{" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(data?.data?.teachingStartDate))}
      </p>
      <p style={{ margin: "10px 0" }}>
        <span style={{ fontWeight: "bold" }}>Teaching Time:</span>{" "}
        {data?.data?.message?.teachingTime}
      </p>
      <p style={{ margin: "10px 0" }}>
        <span style={{ fontWeight: "bold" }}>Salary:</span>{" "}
        {data?.data?.message?.maxSalary}
      </p>
      <p style={{ margin: "10px 0" }}>
        <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
        {data?.data?.message?.location}
      </p>
      <Row justify="space-between">
        <Col span={11}>
          <Link href={`/user/${data?.data?.userId?._id}`}>
            <Button
              style={{
                backgroundColor: "#ffbdbd",
                color: "#b30707",
                fontWeight: "bold",
                width: "100%",
                padding: "0",
              }}
            >
              <h5>User</h5>
            </Button>
          </Link>
        </Col>
        <Col span={12}>
          <Link href={`/dashboard/tutor/${data?.data?.tutorId?._id}`}>
            <Button
              style={{
                backgroundColor: "#c3ffbd",
                color: "#07b318",
                fontWeight: "bold",
                width: "100%",
                padding: "0",
              }}
            >
              Tutor
            </Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default AdminAllBookings;
