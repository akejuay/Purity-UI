"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Toggle } from "../../components/ui/toggle";
import { Button } from "@/components/ui/button";
import AuthLoader from "@/components/AuthLoader";
import { Compass } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpData } from "@/lib/validation/auth";

export default function Page() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!name || !email || !password) {
  //     toast.error("All fields are necessary.");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     const reqUserExists = await fetch("/api/userExists", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     const { user } = await reqUserExists.json();

  //     if (user) {
  //       toast.error("User already exists.");
  //       return;
  //     }

  //     const res = await fetch("/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });

  //     if (res.ok) {
  //       toast.success("Account created successfully!");

  //       router.push("/");
  //     } else {
  //       toast.error("User registration failed.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Something went wrong. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onSubmit = async (data: SignUpData) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const text = await res.text();

      console.log("STATUS:", res.status);
      console.log("RESPONSE:", text);

      if (!res.ok) {
        toast.error("Registration failed");
        return;
      }

      toast.success("Account created successfully!");
      router.push("/sign-in");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="">
      {/* AUTHENTICATION LOADER */}
      {isLoading && <AuthLoader text="Creating your account..." />}

      <div className="flex items-center">
        {/* <SignupNavBar /> */}

        <div className="w-1/2 flex h-full justify-center flex-col max-w-sm mx-auto">
          {/* <h3 className="text-gray-700 text-center font-medium text-xl mb-4">
            Register with
          </h3>

          <p className="text-gray-500 mb-8 font-medium text-center">or</p>

          <div className="flex items-center gap-4 justify-center">
            <IconLinks icon="facebook-circle-fill" />
            <IconLinks icon="apple-fill" />
            <IconLinks icon="google-fill" />
          </div> */}
          <form
            // onSubmit={handleSubmit}
            onSubmit={handleSubmit(onSubmit)}
            className=""
          >
            <div className="space-y-4">
              {/* NAME */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="Name" className="text-gray-700">
                  Name
                </label>

                <input
                  // value={name}
                  {...register("name")}
                  placeholder="Your full name"
                  type="text"
                  disabled={isLoading}
                  className="border border-gray-300 outline-blue-500 placeholder:font-medium py-3 rounded-2xl px-4 placeholder:text-gray-300 disabled:opacity-60"
                  // onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="Email" className="text-gray-700">
                  Email
                </label>

                <input
                  // value={email}
                  placeholder="Your email address"
                  type="email"
                  disabled={isLoading}
                  className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
                  {...register("email")}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="Password" className="text-gray-700">
                  Password
                </label>

                <input
                  // value={password}
                  placeholder="Your password"
                  type="password"
                  disabled={isLoading}
                  className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
                  // onChange={(e) => setPassword(e.target.value)}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="confirmPassword" className="text-gray-700">
                  Confirm Password
                </label>

                <input
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  disabled={isLoading}
                  className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
                />

                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Toggle text="Remember me" />

              {/* SIGN UP BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="uppercase w-full surface-deep cursor-pointer text-white py-3 rounded-xl font-medium text-sm hover:bg-teal-300/50 duration-500 transition-all ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Sign up
              </button>

              <p className="text-gray-400 text-center">
                Already have an account?
                <Link href="sign-in" className="">
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

        <aside className="w-1/2 h-screen">
          <div
            aria-hidden="true"
            className="surface-deep h-full flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-out $-translate-y-3 opacity-100"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Compass className="size-7" />
              </span>
              <span className="font-display text-3xl font-semibold tracking-tight text-primary-foreground">
                Travel<span className="text-accent">Hub</span>
              </span>
            </div>

            <svg viewBox="0 0 240 60" className="h-14 w-60 overflow-visible">
              <path
                id="th-path"
                d="M10 46 C 70 4, 170 4, 230 40"
                fill="none"
                stroke="currentColor"
                className="text-primary-foreground/25"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <path
                d="M10 46 C 70 4, 170 4, 230 40"
                fill="none"
                stroke="currentColor"
                className="text-accent"
                strokeWidth="2"
                strokeDasharray="260"
                strokeDashoffset="260"
                style={{
                  animation:
                    "th-dash 1.5s cubic-bezier(0.22,1,0.36,1) forwards",
                }}
              />
              <g
                className="text-primary-foreground"
                style={{
                  offsetPath: 'path("M10 46 C 70 4, 170 4, 230 40")',
                  offsetRotate: "auto",
                  animation: "th-fly 1.5s cubic-bezier(0.22,1,0.36,1) forwards",
                }}
              >
                <path
                  d="M-7 0 L7 0 M7 0 L1 -4 M7 0 L1 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>

            <div className="h-px w-48 overflow-hidden bg-primary-foreground/20">
              <div
                className="h-full w-full bg-accent"
                style={{
                  animation: "th-bar 1.5s cubic-bezier(0.4,0,0.2,1) forwards",
                }}
              />
            </div>
            <p className="text-xs tracking-[0.35em] text-primary-foreground/60 uppercase">
              Preparing your journey
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

function IconLinks({ icon }: { icon: string }) {
  return (
    <button
      type="button"
      disabled
      className="border border-gray-300 py-3 rounded-2xl px-5 hover:surface-deep hover:text-white hover:border-none transition-all duration-500 -translate-y-5 cursor-pointer"
    >
      <i className={`ri-${icon} text-xl text-gray-700`}></i>
    </button>
  );
}
