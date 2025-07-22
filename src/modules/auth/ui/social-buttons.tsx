import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { HttpStatusCode, HttpStatusText } from "@/lib/http-status"
import {useMessages} from "@/lib/intl/useMessages";

type SocialPorvider = "github" | "google"
export function SocialButtons() {
    const [loading, setLoading] = useState<SocialPorvider | "none">("none");
    const { t } = useMessages();
    const CALLBACK_URL = "/"

    const handleLogin = (type: SocialPorvider) => {
        setLoading(type)
        authClient.signIn.social({
            provider: type,
            callbackURL: CALLBACK_URL,
            fetchOptions: {
                onSuccess: () => {
                    toast.success(t('auth.success_login', { values: { name: 'Alireza' } }))
                    setLoading("none")
                },
                onError: () => {
                    toast.error(HttpStatusText[HttpStatusCode.InternalServerError])
                    setLoading("none")
                },

            }
        })
    }

    return (

        <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
        >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                    loading={loading === "google"}
                    disabled={loading === "github"}
                    onClick={() => handleLogin("google")}
                    variant="secondary"
                    className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                    <Image src="/svg/google.svg" alt="google icon" width={19} height={19} />
                    <span className="ml-2">Sign in with Google</span>
                </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                    loading={loading === "github"}
                    disabled={loading === 'google'}
                    onClick={() => handleLogin('github')}
                    variant="secondary"
                    className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                    <Image src="/svg/github.svg" alt="github icon" width={20} height={20} />
                    <span className="ml-2">Sign in with Github</span>
                </Button>
            </motion.div>
        </motion.div>

    )

}

