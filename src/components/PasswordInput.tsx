import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordInputProps = React.ComponentPropsWithoutRef<typeof Input> & {
  id: string;
};

export function PasswordInput({ id, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = value.length >= 6;

  return (
    <div className="flex flex-col">
      <div className="relative">
        <Input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => (setValue(e.target.value))}
          onBlur={() => setTouched(true)}
          className={cn(
            "pr-10", 
            touched && (isValid
              ? "border-green-500 focus:border-green-500"
              : "border-red-500 focus:border-red-500"
            )
          )}
          aria-invalid={touched && !isValid}
          aria-describedby={`${id}-error`}
          {...props}
        />
        <span
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
          onClick={() => setShow((v) => !v)}
          tabIndex={0}
          role="button"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      {touched && !isValid && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          Password at least 6 characters
        </p>
      )}
    </div>
  );
}
