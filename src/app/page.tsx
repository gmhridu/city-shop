import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {

  return (
    <main>
      <Button asChild>
        <LoginLink>Login</LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>Sign UP</RegisterLink>
      </Button>
    </main>
  );
}


