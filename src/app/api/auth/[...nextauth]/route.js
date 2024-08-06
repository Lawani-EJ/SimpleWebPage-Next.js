import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { ConnecttoDb } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ account, profile, user }) {
      try {
        await ConnecttoDb();
        const checkEmail = await User.findOne({ email: user.email });

        if (!checkEmail) {
          await User.create({ name: user.name, email: user.email });
        }
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
