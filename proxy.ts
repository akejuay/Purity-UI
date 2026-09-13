// export {default} from "next-auth/middleware"

// export const config = {matcher: ["/dashboard"]}

// export { default } from "next-auth/middleware";

// export const middleware = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/billing/:path*",
//     "/tables/:path*",
//     "/rtl/:path*",
//   ],
// };

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
    matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/billing/:path*",
    "/tables/:path*",
    "/rtl/:path*",
  ],
}