import prisma from "@/app/libs/prismadb";

const getMouringWords = async () => {
  try {
    const mouringWords = await prisma.mouringWord.findMany({
      // 按照 mouringWord 中的 createdAt 字段排序,查前20条
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });

    return mouringWords;
  } catch (error: any) {
    return [];
  }
};

export default getMouringWords;
