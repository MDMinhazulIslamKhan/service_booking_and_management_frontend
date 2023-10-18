"use client";

import { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import {
  BookOutlined,
  ScheduleOutlined,
  RedoOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;

  const items = () => {
    const sidebarItems: MenuProps["items"] = [
      {
        label: "Users",
        key: "user",
        icon: <UserOutlined />,
        children: [
          {
            label: (
              <Link href="/dashboard/all-user">
                <h4>All Users</h4>
              </Link>
            ),
            key: `allUser`,
          },
          {
            label: (
              <Link href="/dashboard/all-tutor">
                <h4>All Tutor</h4>
              </Link>
            ),
            key: `allTutor`,
          },
        ],
      },
      // {
      //   label: <Link href="/dashboard/update-user">Update User</Link>,
      //   icon: <RedoOutlined />,
      //   key: "update",
      // },
      {
        label: <Link href="/dashboard/all-bookings">All bookings</Link>,
        icon: <ScheduleOutlined />,
        key: "booking",
      },
    ];

    const tutorSidebarItems: MenuProps["items"] = [
      ...sidebarItems,
      {
        label: (
          <Link href="/dashboard/requested-bookings">Requested bookings</Link>
        ),
        icon: <BookOutlined />,
        key: "bookingRequest",
      },
    ];
    if (role == "admin_user") {
      return sidebarItems;
    } else {
      return tutorSidebarItems;
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        background: "#e8db99",
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        ADMIN
      </div>
      <Menu
        color="#000000"
        theme="light"
        style={{ backgroundColor: "#e8e1bc" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items()}
      />
    </Sider>
  );
};

export default SideBar;
