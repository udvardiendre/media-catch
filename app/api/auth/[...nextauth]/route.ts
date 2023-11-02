import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import User from "@/models/user";




const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            
            async authorize(credentials: any){
                const {email, password} = credentials
                
                try {
                    
                    await connectToDB()
                    const user = await User.findOne({email})
                    
                    if(!user){
                        return null
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if(!passwordMatch){
                        return null
                    }
                    
                    return user;
                } catch (error) {
                    console.log(error)
                }


            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
          }),
    ],
    callbacks: {
        async signIn({account, profile}){
            try {
               if(account?.provider === "google" && profile){
               await connectToDB()
            

               const UserExists = await User.findOne({
                   email: profile?.email
               })

               console.log(profile)
   
               if(!UserExists){
                   await User.create({
                       email: profile?.email,
                       username: profile?.email?.split("@")[0],
                       password: "password",
                       subscribe: false,
                       termsAndConditions: true,
                       //@ts-ignore
                       image: profile.picture
                   })
               }
            }
   
               return true
            } catch (error) {
               console.log(error)
               return false
            }
       }
    },
    
    session: {
        strategy: "jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/sign-in",
        signOut: "/profile"
    }

})

export {handler as GET, handler as POST}