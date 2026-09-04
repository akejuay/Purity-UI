"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { SignupNavBar } from "@/components/Layouts/NavBar";
import { Toggle } from "../../components/ui/toggle";
import { Button } from "@/components/ui/button";
import AuthLoader from "@/components/AuthLoader";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are necessary.");
      return;
    }

    setIsLoading(true);

    try {
      const reqUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await reqUserExists.json();

      if (user) {
        toast.error("User already exists.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        toast.success("Account created successfully!");

        router.push("/");
      } else {
        toast.error("User registration failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-4">
      {/* AUTHENTICATION LOADER */}
      {isLoading && <AuthLoader text="Creating your account..." />}

      <div className="hero h-[520px] rounded-2xl relative">
        <SignupNavBar />

        <div className="my-16">
          <h4 className="text-center text-4xl tracking-[0.02rem] font-medium text-white mb-4">
            Welcome!
          </h4>

          <p className="text-center text-white">
            Use these awesome forms to login or create new <br />
            account in your project for free.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-12 w-[452px] absolute top-80 shadow-2xl rounded-2xl left-1/2 -translate-x-1/2"
        >
          <h3 className="text-gray-700 text-center font-medium text-xl mb-8">
            Register with
          </h3>

          <div className="flex items-center gap-4 justify-center mb-8">
            <IconLinks icon="facebook-circle-fill" />
            <IconLinks icon="apple-fill" />
            <IconLinks icon="google-fill" />
          </div>

          <p className="text-gray-500 font-medium text-center mb-6">or</p>

          <div className="space-y-6">
            {/* NAME */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="Name" className="text-gray-700">
                Name
              </label>

              <input
                value={name}
                placeholder="Your full name"
                type="text"
                disabled={isLoading}
                className="border border-gray-300 outline-blue-500 placeholder:font-medium py-3 rounded-2xl px-4 placeholder:text-gray-300 disabled:opacity-60"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="Email" className="text-gray-700">
                Email
              </label>

              <input
                value={email}
                placeholder="Your email address"
                type="email"
                disabled={isLoading}
                className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="Password" className="text-gray-700">
                Password
              </label>

              <input
                value={password}
                placeholder="Your password"
                type="password"
                disabled={isLoading}
                className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Toggle text="Remember me" />

            {/* SIGN UP BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="uppercase w-full bg-teal-300 text-white py-3 rounded-xl font-medium text-sm hover:bg-teal-300/50 duration-500 transition-all ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Sign up
            </button>

            <p className="text-gray-400 text-center">
              Already have an account?
              <Link href="/" className="text-teal-300">
                <Button
                  variant="link"
                  disabled={isLoading}
                  className="font-bold cursor-pointer"
                >
                  Sign in
                </Button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

function IconLinks({ icon }: { icon: string }) {
  return (
    <button
      type="button"
      disabled
      className="border border-gray-300 py-3 rounded-2xl px-5 hover:bg-teal-300 hover:border-none transition-all duration-500 -translate-y-5 cursor-pointer"
    >
      <i className={`ri-${icon} text-2xl text-gray-700`}></i>
    </button>
  );
}
