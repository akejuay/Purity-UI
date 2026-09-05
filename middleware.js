// export {default} from "next-auth/middleware"

// export const config = {matcher: ["/dashboard"]}

// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/",
//   },
// });

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/authentication/sign-in",
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};