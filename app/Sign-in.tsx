"use client";

import React, { useEffect, useState } from "react";
import chakraLogo from "@/public/chakra-logo.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Layouts/Footer";
import SigninNavBar from "../components/Layouts/NavBar";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Toggle } from "../components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Preloader from "@/components/Preloader";
import AuthLoader from "@/components/AuthLoader";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return <Preloader />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(res);

      if (res?.error) {
        toast.error("Invalid Credentials");
        return;
      }

      toast.success("Login successful!");

      router.replace("/dashboard");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {isLoading && <AuthLoader text="Signing you in..." />}
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

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <label htmlFor="Email" className="text-gray-700 mb-2">
                Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email address"
                disabled={isLoading}
                className="border border-gray-200 outline-none py-3 pl-4 rounded-2xl placeholder:text-gray-300 text-gray-700 disabled:opacity-60"
              />
            </div>

            <div className="flex flex-col mb-10">
              <label htmlFor="Password" className="text-gray-700 mb-2">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Your password"
                disabled={isLoading}
                className="border border-gray-200 outline-none py-3 pl-4 rounded-2xl placeholder:text-gray-300 text-gray-700 disabled:opacity-60"
              />
            </div>

            <Toggle text="Remember me" />

            <div className="my-10">
              <button
                className="uppercase w-full bg-teal-300 cursor-pointer text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>

            <p className="text-gray-400 text-center">
              Don't have an account?
              <Link href="/sign-up" className="text-teal-300">
                <Button
                  variant="link"
                  className="font-bold cursor-pointer"
                  disabled={isLoading}
                >
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
