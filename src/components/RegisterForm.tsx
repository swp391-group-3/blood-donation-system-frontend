import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from 'lucide-react';

const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: RegisterFormData) => {
    //Coming in future
    console.log("Submitting", data);
  };

  const emailValue = watch("email");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-muted-foreground">
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
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              errors.email
                ? "border-red-500 focus:border-red-500"
                : emailValue
                ? "border-green-500 focus:border-green-500"
                : ""
            )}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email.message}
            </p>
          ) : (
            emailValue && (
              <p className="text-sm text-green-600">
                Email looks good!
              </p>
            )
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.password && (
            <p id="password-error" className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={
                errors.confirmPassword ? "confirm-password-error" : undefined
              }
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none"
              tabIndex={-1}
            >
              {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p
              id="confirm-password-error"
              className="mt-2 text-sm text-red-600"
            >
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={cn(
            "w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            isValid
              ? "bg-zinc-950 dark:bg-white hover:bg-zinc-950 dark:hover:bg-zinc-300  text-white dark:text-zinc-950 "
              : "bg-gray-300 text-gray-500"
          )}
        >
          {isSubmitting ? "Signing up…" : "Sign Up"}
        </Button>

        <div className="relative text-center text-sm">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
          <div className="absolute inset-0 top-1/2 border-t border-border" />
        </div>


        <Button variant="outline" className="w-full">
          <FcGoogle className="h-5 w-5" />
          <span className="ml-2">Sign up with Google</span>
        </Button>
        <Button variant="outline" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <g>
              <rect x="2" y="2" width="9" height="9" fill="#f35325" />
              <rect x="13" y="2" width="9" height="9" fill="#81bc06" />
              <rect x="2" y="13" width="9" height="9" fill="#05a6f0" />
              <rect x="13" y="13" width="9" height="9" fill="#ffba08" />
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
  );
}

