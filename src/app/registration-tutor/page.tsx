import TutorRegistration from "@/components/LoginAndRegistration/TutorRegistration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Tutor | Tutor Registration",
};

const Login = () => {
  return (
    <>
      <TutorRegistration />
    </>
  );
};

export default Login;
