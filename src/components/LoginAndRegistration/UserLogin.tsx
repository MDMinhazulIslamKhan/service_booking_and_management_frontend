"use client";
import { Button, Col, Row, message } from "antd";
import loginImg from "../../assets/Login.png";
import React from "react";
import Image from "next/image";
import FormInput from "../Forms/FormInput";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { loginSchema } from "@/schemas/allValidationSchema";
import { useUserLoginMutation } from "@/redux/api/userApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  if (isLoggedIn()) {
    router.push("/home");
  }
  const [userLogin] = useUserLoginMutation(undefined);
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/user/profile");
        message.success("User logged in successfully!");
      } else {
        message.error(res.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      router.push("/home");
    }
  };
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "70vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <div
            style={{
              width: "100%",
            }}
          >
            <Image
              style={{ width: "100%" }}
              src={loginImg}
              width={400}
              alt="login image"
            />
          </div>
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "0 0 15px 0px",
              textAlign: "center",
            }}
          >
            Login your account
          </h1>
          <div style={{ margin: "0 20px" }}>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
              <div>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="User Email"
                  required
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Button
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>

          <h4 style={{ marginTop: "30px", textAlign: "center" }}>
            New to My Tutor?
            <Link href="/registration"> Registration</Link>
          </h4>
        </Col>
      </Row>
      <h4 style={{ textAlign: "center", color: "black", marginTop: "30px" }}>
        Are you a tutor?
        <Link
          href="/login-tutor"
          style={{ textDecoration: "none", color: "#0958d9" }}
        >
          {" "}
          Tutor Login
        </Link>
      </h4>{" "}
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{
            backgroundColor: "#fffbbd",
            color: "#80743c",
            margin: "20px auto",
          }}
        >
          <Link
            href="/home"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Go To Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Login;
