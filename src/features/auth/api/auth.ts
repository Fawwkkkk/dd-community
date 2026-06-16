import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"

// 👇 Расширяем типы NextAuth
declare module "next-auth" {
    interface Session {
        accessToken?: string;
    }
    interface JWT {
        accessToken?: string;
    }
}


export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Discord({
            // просим нужные скоупы
            authorization: { params: { scope: "identify email guilds" } },
        }),
    ],
    callbacks: {
        // пробрасываем токен в сессию (для запросов к Discord API)
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string
            return session
        },
    },
    // опционально: своя БД через adapter (Prisma/Drizzle)
})