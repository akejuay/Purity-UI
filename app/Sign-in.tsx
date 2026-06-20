"use client";
import React, { useState } from "react";
import chakraLogo from "@/public/chakra-logo.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Layouts/Footer";
import SigninNavBar from "../components/Layouts/NavBar";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Toggle } from "./src/shared/ui/toggle";
import { Button } from "./src/shared/ui/button";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        toast.error("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <main className="">
      <SigninNavBar />
      <div className="max-w-6xl mx-auto mb-20">
        <div className="absolute top-0 right-0">
          <Image src={chakraLogo} alt="Chakra" width={700} height={700} />
        </div>
        <div className="relative w-[30%] flex h-screen justify-center flex-col">
          <h5 className="text-teal-300 mb-2 font-bold text-3xl">
            Welcome Back
          </h5>
          <p className="text-gray-400 text-sm mb-10">
            Enter your password and email to sign in
          </p>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <label htmlFor="Email" className="text-gray-700 mb-2">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email address"
                className="border border-gray-200 outline-none py-3 pl-4 rounded-2xl placeholder:text-gray-300 text-gray-700"
              />
            </div>

            <div className="flex flex-col mb-10">
              <label htmlFor="Password" className="text-gray-700 mb-2">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Your password"
                className="border border-gray-200 outline-none py-3 pl-4 rounded-2xl placeholder:text-gray-300 text-gray-700"
              />
            </div>
            <Toggle />

            <div className="my-10">
              <button
                className="uppercase w-full bg-teal-300 cursor-pointer text-white py-3 rounded-xl font-medium text-sm"
                onSubmit={handleSubmit}
              >
                sign in
              </button>
            </div>

            <p className="text-gray-400 text-center">
              Don't have an account?
              <Link href="/sign-up" className="text-teal-300">
                <Button variant="link" className="font-bold cursor-pointer">
                  Sign up
                </Button>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
