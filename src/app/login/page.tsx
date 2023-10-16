import LoginPage from "@/components/LoginAndRegistration/UserLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Tutor | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
