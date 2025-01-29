import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    console.log("email >>", email);
    console.log("password >>", password);

    // Hardcoded credentials
    const validEmail = "raofahad046@gmail.com";
    const validPassword = "fahad";

    if (email === validEmail && password === validPassword) {
      // Set HttpOnly cookie
      cookies().set({
        name: "token",
        value: "true",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day expiration
      });

      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
