import UserRegistration from "@/components/LoginAndRegistration/UserRegistration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Tutor | User Registration",
};

const Login = () => {
  return (
    <>
      <UserRegistration />
    </>
  );
};

export default Login;
