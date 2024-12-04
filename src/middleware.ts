import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const pathname = req.nextUrl.pathname;

  // Redirect to "/" if the user does not have access to "/dashboard"
  if (
    pathname === "/dashboard" &&
    (user && (user.email !== "hasanhridoymahabub9@gmail.com" && user.email !== "hasanshuvo416@gmail.com"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect to "/dashboard" if the user with the correct email tries to access "/"
  if (
    pathname === "/" &&
    user &&
    (user.email === "hasanhridoymahabub9@gmail.com" || user.email === "hasanshuvo416@gmail.com")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
