import { getServerSession } from "next-auth";
import { redirect } from "@/node_modules/next/navigation";
import Link from "@/node_modules/next/link";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    // redirect("/api/auth/signin");
    return (
      <>
        <p>You are not logged in...</p>
        <Link href={`/api/auth/signin`}>
          <p>Click here to signup/login</p>
        </Link>
      </>
    );
  }
  return (
    <main>
      <h1>Hello next</h1>
    </main>
  );
}
