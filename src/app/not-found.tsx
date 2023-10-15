"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <h1>Page is not found.</h1>
    </div>
  );
};

export default NotFound;
