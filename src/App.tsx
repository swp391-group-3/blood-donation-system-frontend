import { useEffect, useState } from "react";
import ToggleThemeButton from "@/components/ToggleThemeButton"
import { RegisterForm } from "@/components/RegisterForm"
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LoginPage() {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => { setMounted(true) }, [])
    
    return (
        <motion.div className="grid h-screen lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-between gap-2">
                    <ToggleThemeButton />
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <RegisterForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center bg-muted w-full h-full">
                <div className="relative w-full h-lvh overflow-hidden flex items-center justify-center">
                    <BackgroundBeamsWithCollision>
                        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
                            <div>
                                {mounted && (
                                    <DotLottieReact
                                        src="https://lottie.host/4ed86981-f2b2-40bf-bd0d-58db3e122b73/3VpitcEEaj.lottie"
                                        loop
                                        autoplay
                                    />
                                )}
                            </div>
                            <section className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
                                <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">Welcome back!</h2>
                                <p className="italic text-lg text-muted-foreground">
                                    “Every drop counts. Thank you for making a difference.”
                                </p>
                            </section>
                        </div>
                    </BackgroundBeamsWithCollision>
                </div>
            </div>
        </motion.div>
    )
}
