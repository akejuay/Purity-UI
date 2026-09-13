// // "use client"

// import  NextAuth  from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// // import { connectMongoDB } from "../../../../lib/mongodb"
// import { connectMongoDB } from "../../../src/shared/lib/mongodb";
// import User from "../../../../models/user"
// import bcrypt from "bcryptjs";
// import { toast } from "sonner";

// const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name:"credentials",
//             credentials:{},

//             async authorize(credentials) {
//     if (!credentials) return null;

//     const { email, password } = credentials;

//     try {
//         await connectMongoDB();

//         const user = await User.findOne({ email });

//         if (!user) {
//             return null;
//         }

//         const passwordMatch = await bcrypt.compare(
//             password,
//             user.password
//         );

//         if (!passwordMatch) {
//             return null;
//         }

//         return {
//             id: user._id.toString(),
//             email: user.email,
//             name: user.name,
//         };
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }
//         })
//     ],

//     session: {
//         strategy: "jwt"
//     },
//     secret: process.env.NEXTAUTH_SECRET, 
//     pages: {
//         signIn: "/"
//     }
// }

// const handler = NextAuth(authOptions);

// export {handler as GET, handler as POST}


// // import NextAuth from "next-auth/next";
// // import CredentialsProvider from "next-auth/providers/credentials";

// // const authOptions = {
// //     providers: [
// //         CredentialsProvider({
// //             name:"credentials",
// //             credentials:{},

// //             async authorize(credentials) {
// //                 const user = {id: "1"}
// //                 return user;
// //             },
// //         })
// //     ],

// //     session: {
// //         strategy: "jwt"
// //     },
// //     secret: process.env.NEXTAUTH_SECRET, 
// //     pages: {
// //         signIn: "/"
// //     }
// // }

// // const handler = NextAuth(authOptions);

// // export {handler as GET, handler as POST}

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../src/shared/lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectMongoDB();

          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) {
            return null;
          }

          // Check whether this user is the admin
          const isAdmin =
            user.email.toLowerCase() ===
            process.env.ADMIN_EMAIL?.toLowerCase();

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            isAdmin,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // Put isAdmin inside the JWT
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
      }

      return token;
    },

    // Put isAdmin inside the session
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },
  },

  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };