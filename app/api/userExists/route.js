// import { NextResponse } from "next/server";
// import { connectMongoDB } from "../../../app/src/shared/lib/mongodb";
// import User from "../../../models/user";
// import {toast} from "sonner"

// export async function POST(req) {
//     try {
//         await connectMongoDB()
//         const {email} = await req.json()
//         const user = await User.findOne({email}).select("_id")
//         console.log("user: ", user);
//         return NextResponse.json({user})
//     } catch (error) {
//         console.log(error);       
//     }
// }


import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../app/src/shared/lib/mongodb";
import User from "../../../models/user";

export async function POST(req) {
  try {
    await connectMongoDB();

    const { email } = await req.json();

    const user = await User.findOne({ email }).select("_id");

    return NextResponse.json({
      exists: !!user,
      user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}