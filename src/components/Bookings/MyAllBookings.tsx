import { Button, Card, Col, Row, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import ModalComponent from "../ui/Modal";
import { useCancelBookingMutation } from "@/redux/api/bookingApi";

const AllBookings = (data: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [cancelBooking] = useCancelBookingMutation(undefined);
  const cancelOrder = () => {
    setOpen(true);
  };
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
        {data?.data?.tutorId?.fullName}
      </h3>
      <h3
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        My Conditions
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
          <Button
            onClick={cancelOrder}
            style={{
              backgroundColor: "#ffbdbd",
              color: "#b30707",
              fontWeight: "bold",
              width: "100%",
              padding: "0",
            }}
          >
            <h5>Cancel</h5>
          </Button>
        </Col>{" "}
        <Col span={12}>
          <Link href={`/tutor/${data?.data?.tutorId?._id}`}>
            {" "}
            <Button
              style={{
                backgroundColor: "#c3ffbd",
                color: "#07b318",
                fontWeight: "bold",
                width: "100%",
                padding: "0",
              }}
            >
              Details
            </Button>
          </Link>
        </Col>
      </Row>{" "}
      <ModalComponent
        title="Cancel Booking"
        isOpen={open}
        closeModal={() => {
          setOpen(false);
        }}
        handleOk={async () => {
          try {
            const res = await cancelBooking(data?.data?._id).unwrap();
            if (res.statusCode === 500) {
              message.error(res.message);
              setOpen(false);
            } else {
              message.success("Booking Canceled Successfully!!!");
            }
          } catch (error) {
            message.error("Something went wrong");
          }
        }}
      >
        <p className="my-5">Are you sure to cancel this booking?</p>
      </ModalComponent>
    </Card>
  );
};

export default AllBookings;
