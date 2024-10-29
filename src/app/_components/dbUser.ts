import prisma from "../lib/db";

export async function getData (userId: string){
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return data;
};
