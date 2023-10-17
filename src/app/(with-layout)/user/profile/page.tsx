"use client";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React from "react";

const UserProfile = () => {
  const { role } = getUserInfo() as any;
  console.log(role, isLoggedIn());
  const router = useRouter();
  if (!isLoggedIn() || role == "tutor") {
    router.push("/home");
  }
  return <div></div>;
};

export default UserProfile;
