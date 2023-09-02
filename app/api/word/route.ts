import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ data: "hello world" });
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
