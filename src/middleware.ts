import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const pathname = req.nextUrl.pathname;

  if (user && user?.email !== 'hasanhridoymahabub9@gmail.com' && pathname === '/dashboard') {
    return NextResponse.redirect(new URL("/", req.url));
  }


  if (user?.email === 'hasanhridoymahabub9@gmail.com' && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
