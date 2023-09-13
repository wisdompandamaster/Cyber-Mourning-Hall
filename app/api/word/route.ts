/*
 * @Author: wisdompandamaster 2532569059@qq.com
 * @Date: 2023-09-10 20:00:09
 * @LastEditors: wisdompandamaster 2532569059@qq.com
 * @LastEditTime: 2023-09-13 08:05:40
 * @FilePath: \WEBd:\Code\Cyber-Mourning-Hall\cyber-mourning-hall\app\api\word\route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

    const MourningWordList = await prisma.mouringWord.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });

    return NextResponse.json(MourningWordList);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
