"use client";
import AdminAllUsers from "@/components/Bookings/AdminAllUsers";
import { useAllUserByAdminQuery } from "@/redux/api/userApi";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Card, Empty, Row } from "antd";
import { useRouter } from "next/navigation";

const AllUsers = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (!isLoggedIn() || role == "tutor") {
      router.push("/home");
    }
  }
  const { data } = useAllUserByAdminQuery(undefined);

  return (
    <Card
      bodyStyle={{ padding: "20px", overflow: "hidden", minHeight: "100vh" }}
    >
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "10px 0",
          backgroundColor: "white",
        }}
      >
        All Users
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
        {data?.data?.data.length !== 0 ? (
          data?.data?.data?.map((booking: any, index: number) => (
            <>
              <AdminAllUsers data={booking} key={index} />
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

export default AllUsers;
