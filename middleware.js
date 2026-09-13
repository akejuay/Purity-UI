// export {default} from "next-auth/middleware"

// export const config = {matcher: ["/dashboard"]}

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/billing/:path*",
    "/tables/:path*",
    "/rtl/:path*",
  ],
};