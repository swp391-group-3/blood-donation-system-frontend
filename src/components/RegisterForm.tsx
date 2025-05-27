import {useState} from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { PasswordInput } from "@/components/PasswordInput"


export function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const isEmailValid = email.trim().length > 0
    const isPasswordValid = password.length >= 6
    const isPasswordsMatch = confirmPassword.length > 0 && confirmPassword === password

    const isFormValid = isEmailValid && isPasswordValid && isPasswordsMatch
    
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitAttempted(true);
        let valid = true;
        if (!email.trim()) {
        setEmailError("Email is required");
        valid = false;
        } else {
        setEmailError("");
        }
        
        if (!valid) return;
    };
    
    return (
        <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
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
                        aria-invalid={!!(submitAttempted && emailError)}
                        aria-describedby="email-error"
                        className={cn(submitAttempted && emailError ? "border-red-500 focus:border-red-500" : "")}
                    />
                    {submitAttempted && emailError && (
                        <p id="email-error" className="mt-2 text-sm text-red-600">
                            {emailError}
                        </p>
                    )}
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <PasswordInput 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        forceTouched={submitAttempted}
                        required
                        
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                    </div>
                    <PasswordInput 
                        id="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        validate={(val) => val === password}
                        errorMessage="Passwords do not match"
                        forceTouched={true} 
                        required 
                    />
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