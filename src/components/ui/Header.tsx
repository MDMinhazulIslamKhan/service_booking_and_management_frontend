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
    role == "user" ? router.push("/user/booking") : router.push("/offer");
  };

  let items: MenuProps["items"] =
    role == "user"
      ? [
          {
            key: "-1",
            label: (
              <Link href="/cart">
                {" "}
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  Cart
                </Button>
              </Link>
            ),
          },
          {
            key: "0",
            label: (
              <Link href={`/${role}/profile`}>
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  Profile
                </Button>
              </Link>
            ),
          },
          {
            key: "1",
            label: (
              <Link href="/user/booking">
                {" "}
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  Booking
                </Button>
              </Link>
            ),
          },
          {
            key: "2",
            label: (
              <Link href={`/${role}/profile`}>
                {" "}
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  History
                </Button>
              </Link>
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
              <Link href={`/${role}/profile`}>
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  Profile
                </Button>
              </Link>
            ),
          },
          {
            key: "1",
            label: (
              <Link href="/offer">
                {" "}
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  Offer
                </Button>
              </Link>
            ),
          },
          {
            key: "2",
            label: (
              <Link href={`/${role}/profile`}>
                <Button
                  style={{
                    backgroundColor: "#c3ffbd",
                    color: "#07b318",
                    width: "100%",
                  }}
                >
                  History
                </Button>
              </Link>
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
          <Link href="/login">
            {" "}
            <Button
              style={{
                backgroundColor: "#c3ffbd",
                color: "#07b318",
              }}
            >
              Login
            </Button>
          </Link>
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
