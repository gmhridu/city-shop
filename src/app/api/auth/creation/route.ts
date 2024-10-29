import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";
import {unstable_noStore as noStore} from 'next/cache'

export async function GET() {
  noStore();
  const { getUser, getClaim } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong...");
  }

  // Fetch the role claim from Kinde
  const roleClaim = await getClaim("role");

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    }
  });

  // Determine the user's role based on the Kinde role claim. If not admin, default to guest.
  const userRole = roleClaim?.value === Role.admin ? Role.admin : Role.guest;

  if (!dbUser) {

    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        role: userRole,
      }
    });
  } else {
    if (dbUser.role !== userRole) {
      dbUser = await prisma.user.update({
        where: { id: user.id },
        data: { role: userRole },
      });
    }
  }

  return NextResponse.redirect("http://localhost:3000");
}
