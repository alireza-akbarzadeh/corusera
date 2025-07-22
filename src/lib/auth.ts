import {PrismaClient} from "@prisma/client";
import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {hashedPassword} from "./utils";
import {env} from "@/env";
import {emailOTP} from "better-auth/plugins/email-otp";
import {EmailTemplate} from "@/containers/email-template";
import {resend} from "@/lib/resend";
// If your Prisma file is located elsewhere, you can change the path
const isValid = false;

const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
        github: {
            clientId: env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            clientSecret: env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        },
        google: {
            clientId: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        },
    },
    plugins: [
        emailOTP({
            async sendVerificationOTP({email, otp, type}) {
                const {data, error} = await resend.emails.send({
                    from: 'Coursera <onboarding@resend.dev>',
                    to: [email],
                    subject: 'Coursera - Verify your email',
                    react: EmailTemplate({firstName: 'John'}),
                });
            },
        })
    ],
    emailAndPassword: {
        enabled: true,
        disableSignUp: false,
        requireEmailVerification: true,
        minPasswordLength: 8,
        maxPasswordLength: 128,
        autoSignIn: true,
        sendResetPassword: async ({user, url, token}) => {
            // Send reset password email
        },
        resetPasswordTokenExpiresIn: 3600, // 1 hour
        password: {
            // hash: async (password) => {
            //   Custom password hashing
            //   return hashedPassword;
            // },
            verify: async ({hash, password}) => {
                // Custom password verification
                return isValid;
            },
        },
    },
});
