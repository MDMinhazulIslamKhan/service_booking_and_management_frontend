import {
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import Link from "next/link";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  isLoggedIn();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;

  const goTo = () => {
    role == "user" ? router.push("/booking") : router.push("/offer");
  };

  let items: MenuProps["items"] =
    role == "user"
      ? [
          {
            key: "-1",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href="/cart">Cart</Link>
              </Button>
            ),
          },
          {
            key: "0",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href={`/profile/${role}`}>Profile</Link>
              </Button>
            ),
          },
          {
            key: "1",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href="/booking">Booking</Link>
              </Button>
            ),
          },
          {
            key: "2",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href="/history">History</Link>
              </Button>
            ),
          },
          {
            key: "3",
            label: (
              <Button
                style={{
                  width: "100%",
                }}
                onClick={logOut}
                type="text"
                danger
              >
                Logout
              </Button>
            ),
          },
        ]
      : [
          {
            key: "0",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href={`/profile/${role}`}>Profile</Link>
              </Button>
            ),
          },
          {
            key: "1",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href="/offer">Offer</Link>
              </Button>
            ),
          },
          {
            key: "2",
            label: (
              <Button
                style={{
                  backgroundColor: "#c3ffbd",
                  color: "#07b318",
                  width: "100%",
                }}
              >
                <Link href="/history">History</Link>
              </Button>
            ),
          },
          {
            key: "3",
            label: (
              <Button
                style={{
                  width: "100%",
                }}
                onClick={logOut}
                type="text"
                danger
              >
                Logout
              </Button>
            ),
          },
        ];
  if (!isLoggedIn()) {
    items = [
      {
        key: "0",
        label: (
          <Button
            style={{
              backgroundColor: "#c3ffbd",
              color: "#07b318",
            }}
          >
            <Link href="/login">Login</Link>
          </Button>
        ),
      },
    ];
  }
  return (
    <AntHeader
      style={{
        background: "#ebd259",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          height: "100%",
          widows: "100%",
        }}
        wrap={false}
      >
        <Col flex="none"></Col>
        <Col flex="auto">
          <Link href="/home">
            <h1
              style={{
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
                fontFamily: "fantasy",
              }}
            >
              My Tutor
            </h1>
          </Link>
        </Col>
        <Col flex="none">
          <Row justify="end" align="middle">
            {isLoggedIn() && (
              <Badge size="small" count={99}>
                <Avatar
                  onClick={goTo}
                  size="default"
                  style={{
                    margin: "5px 0 0",
                  }}
                  icon={<BellOutlined />}
                />
              </Badge>
            )}
            <Dropdown menu={{ items }}>
              <a
                style={{
                  margin: "0px 0 0 20px",
                  color: "red",
                }}
              >
                <Space wrap size={16}>
                  <Avatar size="large" icon={<UserOutlined />} />
                </Space>
              </a>
            </Dropdown>
          </Row>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
