import TutorLogin from "@/components/LoginAndRegistration/TutorLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Tutor | Tutor Login",
};

const Login = () => {
  return (
    <>
      <TutorLogin />
    </>
  );
};

export default Login;
