"use server"
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

import User from '@/models/User';

import connectDb from '@/app/db/connectDb';

export const authoptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // Optionally specify the scopes here if needed
            // scope: "read:user"
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {


            if (account.provider == 'github') {
                try {
                    await connectDb();


                    // Check if user already present in the Database
                    const currentUser = await User.findOne({ email: user.email });


                    if (!currentUser) {
                        const newUser = new User({
                            email: user.email,
                            username: user.email.split("@")[0],
                            // initially we dont have the name
                        });
                        await newUser.save();
                        user.name = newUser.username;
                        // update the session's name with the username

                    }
                    return true; // Return true to indicate successful sign-in
                } catch (error) {
                    console.error("Error in signIn callback:", error);
                    return false; // Return false to indicate sign-in failure
                }
            }

            return true; // Return true if no specific handling is needed for other providers
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email });

            session.user.name = dbUser.username

            return session
        },
    }
});

export { authoptions as GET, authoptions as POST }
