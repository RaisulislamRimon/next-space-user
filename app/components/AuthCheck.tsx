"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  console.log(session, status);
  if (status === "authenticated") {
    return <>{children}</>;
  }
  return (
    <>
      {/* Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button> */}
    </>
  );
}
