"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInData } from "@/lib/validation/auth";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Compass, Loader2 } from "lucide-react";
import AuthLoader from "@/components/AuthLoader";
import SigninNavBar from "@/components/Layouts/NavBar";
import { Toggle } from "@/components/ui/toggle";
import { Footer } from "@/components/LandingPageComponents/Footer";
import { Preloader } from "@/components/LandingPageComponents/Preloader";
import { Logo } from "@/components/LandingPageComponents/Logo";

export default function Signin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setIsLoading(true);

  //   try {
  //     const res = await signIn("credentials", {
  //       email,
  //       password,
  //       redirect: false,
  //     });

  //     console.log(res);

  //     if (res?.error) {
  //       toast.error("Invalid Credentials");
  //       return;
  //     }

  //     toast.success("Login successful!");

  //     router.replace("/dashboard");
  //   } catch (error) {
  //     toast.error("Something went wrong. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onSubmit = async (data: SignInData) => {
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      console.log(res);

      if (res?.error) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Login successful!");
      router.replace("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {isLoading && <AuthLoader text="Signing you in..." />}
      {/* <SigninNavBar /> */}

      <div className="flex justify-center h-screen">
        {/* <div className="absolute top-0 right-0">
          <Image src={chakraLogo} alt="Chakra" width={700} height={700} />
        </div> */}

        <div className="w-[50%] flex h-screen justify-center flex-col max-w-sm mx-auto">
          <h5 className="text-accent mb-2 font-bold text-3xl">Welcome Back</h5>

          <p className="text-gray-400 text-sm mb-10">
            Enter your password and email to sign in
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <label htmlFor="Email" className="text-gray-700 mb-2">
                Email
              </label>

              <input
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                {...register("email")}
                type="email"
                placeholder="Your email address"
                disabled={isLoading}
                className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-10">
              <label htmlFor="Password" className="text-gray-700 mb-2">
                Password
              </label>

              <input
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                {...register("password")}
                type="password"
                placeholder="Your password"
                disabled={isLoading}
                className="border border-gray-300 outline-blue-500 py-3 rounded-2xl px-4 placeholder:font-medium placeholder:text-gray-300 disabled:opacity-60"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Toggle text="Remember me" />

            <div className="my-10">
              <button
                className="uppercase w-full surface-deep cursor-pointer text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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

        <aside className="w-1/2 h-screen rounded-tr-2xl">
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

      {/* <Footer /> */}
    </main>
  );
}
