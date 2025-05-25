import {useState} from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { PasswordInput } from "@/components/PasswordInput"
import { Checkbox } from "@/components/ui/checkbox"

export function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your details below to create your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="m@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <PasswordInput 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Confirm Password</Label>
                    </div>
                    <PasswordInput id="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm whitespace-nowrap">
                        I have read and agreed to
                        <a href="#" className="underline underline-offset-4">
                        Terms & Conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit" className="w-full">
                    Sign Up
                </Button>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
                <Button variant="outline" className="w-full">
                    <FcGoogle className="h-5 w-5" />
                    <span className="ml-2">Sign up with Google</span>
                </Button>
                <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <g>
                        <rect x="2" y="2" width="9" height="9" fill="#f35325"/>
                        <rect x="13" y="2" width="9" height="9" fill="#81bc06"/>
                        <rect x="2" y="13" width="9" height="9" fill="#05a6f0"/>
                        <rect x="13" y="13" width="9" height="9" fill="#ffba08"/>
                        </g>
                    </svg>
                    <span className="ml-2">Sign up with Microsoft</span>
                </Button>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign in
                </a>
            </div>
        </form>
    )
}