"use client";
import AdminAllBookings from "@/components/Bookings/AdminAllBookings";
import { useAllBookingQuery, useOwnBookingQuery } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { Card, Empty, Row } from "antd";
import { useRouter } from "next/navigation";

const AllBooking = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();

  const { data, isLoading } = useAllBookingQuery(undefined);
  return (
    <Card bodyStyle={{ overflow: "hidden", minHeight: "100vh" }}>
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "10px 0",
          backgroundColor: "white",
        }}
      >
        All Bookings
      </h4>
      <Row
        justify="space-between"
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "20px",
        }}
        align="middle"
        gutter={[10, 24]}
      >
        {data?.data.length !== 0 ? (
          data?.data?.map((booking: any, index: number) => (
            <>
              <AdminAllBookings data={booking} key={index} />
            </>
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ margin: "50px auto" }}
          />
        )}
      </Row>
    </Card>
  );
};

export default AllBooking;