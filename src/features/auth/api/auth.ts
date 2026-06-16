import NextAuth from "next-auth";
import Discord from "@auth/core/providers/discord";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            authorization: { params: { scope: "identify identify.premium connections guilds.members.read guilds.channels.read guilds.join messages.read activities.read email guilds" } },
        }),
    ],
});