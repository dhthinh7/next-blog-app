// pages/api/auth/[...nextauth].js
import AppleProvider from 'next-auth/providers/apple'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID ? process.env.APPLE_ID : '',
    //   clientSecret: process.env.APPLE_SECRET ? process.env.APPLE_SECRET : ''
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : '',
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : ''
    })
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: '<no-reply@example.com>'
    // })
  ]
}
