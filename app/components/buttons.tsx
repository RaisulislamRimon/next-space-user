"use client";

import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    // return <>Loading...</>;
    return (
      <>
        <button className="">
          <span className="loading loading-spinner"></span>
        </button>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <div className="avatar online">
          <div className="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <Link href={"/dashboard"}>
              {/* Dashboard */}
              <Image
                // src={session.user?.image ?? "/next.svg"}
                src={session.user?.image}
                alt="user name"
                title={session.user?.name}
                width={50}
                height={50}
                // className="rounded-full mr-3"
                // height={32}
                // width={32}
              />
            </Link>
          </div>
        </div>
        <SignOuButton />
      </>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOuButton() {
  return (
    <button onClick={() => signOut()} className="ml-3">
      Sign out
    </button>
  );
}
