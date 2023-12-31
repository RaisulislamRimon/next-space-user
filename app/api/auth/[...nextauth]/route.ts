import NextAuth from "next-auth";
import type { NextAuthOptions } from "@/node_modules/next-auth/index";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
