"use client";
import AdminAllUsers from "@/components/Bookings/AdminAllUsers";
import { useAllUserByAdminQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import { Card, Empty, Input, Row } from "antd";
import { useState } from "react";

const AllUsers = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 500,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data } = useAllUserByAdminQuery({ ...query });

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
      <div style={{ background: "white", display: "flex", marginTop: "-58px" }}>
        <Input
          size="large"
          placeholder="Search"
          style={{ width: "200px", margin: "5px 20px 0 auto" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
