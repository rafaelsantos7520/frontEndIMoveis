import NextAuth, { NextAuthOptions } from "next-auth"
import CredetialsProvider from "next-auth/providers/credentials"
import api from "../../../../services/api"


const nextAuthOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredetialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: 'password', type: "password" },
            },

            async authorize(credentials, req) {
                const response = await fetch("https://api-imoveis-yrvf.onrender.com/login", {
                    method: "POST",
                    headers: {
                        "Content-type": "aplication/json"
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password : credentials?.password
                    })
                })

                const user = await response.json()

                if (user && response.ok) {
                    return user
                }
                return null
            },
            })

        // ...add more providers here
    ],
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }