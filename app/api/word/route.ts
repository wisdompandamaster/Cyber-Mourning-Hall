import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { inputWord } = body;

    const newMourningWord = await prisma.mouringWord.create({
      data: {
        content: inputWord,
      },
    });

    return NextResponse.json(newMourningWord);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
