import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { DefaultSession, User as NextAuthUser } from "next-auth";
import axios from "axios";

// Extend the User type to include 'cedula'
declare module "next-auth" {
  interface Session {
    user: {
      cedula?: string;
    } & DefaultSession["user"];
    afiliado?: any; // Add this line to extend Session with 'afiliado'
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        cedula: { type: "text", placeholder: "Cedula" },
      },
      authorize: async (credentials) => {
        // const response = await axios.post(
        //   "https://necropolis.sytes.net/api/validarCedula",
        //   { cedula: credentials?.cedula },
        //   { timeout: 10000 }, // Set a timeout of 10 seconds
        // );

        // const response = await fetch(
        //   "https://necropolis.sytes.net/api/validarCedula",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ cedula: credentials?.cedula }),
        //   },
        // );
        
          const response = await fetch(
            "/api/validarCedula",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ cedula: credentials?.cedula }),
            },
          );
          if (!response.ok) return null;
          const { afiliado } = await response.json();
          if (afiliado) {
            return {
              ...afiliado,
              id: afiliado.cedula,
              name: afiliado.nombre,
            };
          }
          return null;
        } catch (e) {
          // Optionally log error
          return null;
        }

        // const { afiliado } = await response.data;

        // if (afiliado) {
        //   return {
        //     ...afiliado, // Spread all afiliado fields
        //     id: afiliado.cedula, // id is required by NextAuth
        //     name: afiliado.nombre, // name is used by NextAuth
        //   };
        // }

        // // If authentication fails, return null
        // return null;

        // Simulate an authentication check
        // if (credentials?.cedula === "123456") {
        //   console.log("User authenticated successfully");
        //   return { name: "User", cedula: credentials.cedula };
        // }
        // If authentication fails, return null
        // return { message: "Invalid credentials" };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // On first login, user is defined and contains the afiliado object
      if (user) {
        // If you returned { ...afiliado, id, name } in authorize, user will have all afiliado fields
        token.afiliado = user; // Store the whole afiliado object in the token
      }
      return token;
    },
    async session({ session, token }) {
      // Expose the afiliado object in the session
      session.afiliado = token.afiliado;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    //signOut: "/",
    // error: "/auth/error",
  },
});
