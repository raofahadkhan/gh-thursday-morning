import bcrypt from "bcrypt";
import { signUpSchema } from "@/validations/signup-schema";
import { NextResponse, type NextRequest } from "next/server";

const db = [] as any;
export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const result = await signUpSchema.safeParseAsync(data);
  if (result.success == false) {
    return NextResponse.json(
      { message: "Validation Error", errors: result.error },
      { status: 400 }
    );
  }

  const roundSalt = await bcrypt.genSalt(11);
  const hashPassword = await bcrypt.hash(data?.password, roundSalt);
  db?.push({
    username: data?.username,
    email: data?.email,
    password: hashPassword,
  });

  return NextResponse.json(
    { message: "Success", data: { db } },
    { status: 201 }
  );
};
