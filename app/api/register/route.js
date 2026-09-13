// import { NextResponse } from "next/server"
// import { connectMongoDB } from "../../../app/src/shared/lib/mongodb"
// import User from "../../../models/user"
// import bcrypt from "bcryptjs";
// export async function POST(req) {
//     try {
//         const {name, email, password} = await req.json()
//         const hashedPassword = await bcrypt.hash(password, 10)

//         await connectMongoDB()
//         await User.create({name, email, password: hashedPassword})
        

//         return NextResponse.json({message: "User registered."}, {status: 201})
//     } catch (error) {
//         return NextResponse.json({message: "An error occured while registering the user."}, {status:500})
//     }
// }


import { NextResponse } from "next/server";
import { connectMongoDB } from "../../src/shared/lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
import { signUpSchema } from "../../../lib/validation/auth";

export async function POST(req) {
  try {
    const body = await req.json();

    const validation = signUpSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: validation.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { name, email, password } = validation.data;

    await connectMongoDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}