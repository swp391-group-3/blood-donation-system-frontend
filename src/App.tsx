import { HeartPlus } from "lucide-react"
import ToggleThemeButton from "@/components/ToggleThemeButton"
import { LoginForm } from "@/components/LoginForm"
import { motion } from "framer-motion";

export default function LoginPage() {
    return (
        <motion.div className="grid min-h-svh lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-between gap-2">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <HeartPlus className="size-4" />
                        </div>
                        BloodBridge
                    </a>
                    <ToggleThemeButton />
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center bg-muted">
                <div className="relative z-10 max-w-lg text-center px-8 py-12">
                    <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
                    <p className="italic text-lg text-muted-foreground">
                    “Every drop counts. Thank you for making a difference.”
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
