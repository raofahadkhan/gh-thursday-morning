import { productList } from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ data: productList }, { status: 200 });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ data: productList }, { status: 200 });
};


export const PATCH = async (request: Request) => {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({ data: productList }, { status: 200 });
  };
  export const PUT = async (request: Request) => {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({ data: productList }, { status: 200 });
  };

  export const DELETE=async (request:Request)=>{
    const data=await request.json();
    console.log(data);
    return NextResponse.json({data:"This Data is Deleted"})
    
  }

